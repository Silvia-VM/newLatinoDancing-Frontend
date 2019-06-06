import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Link
} from "react-native";
import axios from "axios";
import { MapView } from "expo";
import { marker } from "react-native-maps";

class ListSoirees extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Map"
    };
  };
  //Declaration de mes states
  state = {
    events: [],
    bachata: false,
    kizomba: false,
    cubaine: false,
    porto: false
  };

  render() {
    if (this.state.events.length === 0) {
      return <Text> Loading</Text>;
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            {/* Creation de boutons qui au onPress effectue les fonctions showMore..qui filtre les danses */}
            <TouchableOpacity style={styles.buttonsOrange}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                onPress={this.showMoreBachata}
              >
                BACHATA
              </Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.buttonsRouge}
              underlayColor={"#FED044"}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                onPress={this.showMoreSalsa}
              >
                SALSA
              </Text>
            </TouchableHighlight>
            <TouchableOpacity style={styles.buttonsVert}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                onPress={this.showMoreKizomba}
              >
                KIZOMBA
              </Text>
            </TouchableOpacity>
          </View>
          <MapView
            style={{ flex: 1 }}
            events={this.state.events}
            onEventsChange={this.onEventsChange}
            initialRegion={{
              latitude: 48.856614,
              longitude: 2.3522219,
              latitudeDelta: 0.11,
              longitudeDelta: 0.07
            }}
          >
            {/* Fonction filter avec en parametre item qui a une condition if en true si true la methode includes verifie et recupere dans la clef tags la ou les danses et les affiche sinon false item rien  */}

            {this.state.events
              .filter(item =>
                this.state.bachata ? item.tags.includes("Bachata") : item
              )
              .filter(item =>
                this.state.kizomba ? item.tags.includes("Kizomba") : item
              )
              .filter(item =>
                this.state.cubaine
                  ? item.tags.includes("Cubaine") || item.tags.includes("Porto")
                  : item
              )
              .map((item, index) => {
                return (
                  <View key={index}>
                    <MapView.Marker
                      coordinate={{
                        latitude: Number(item.latitude),
                        longitude: Number(item.longitude)
                      }}
                      pinColor={
                        this.state.kizomba
                          ? "#0A9A97"
                          : this.state.cubaine || this.state.porto
                          ? "#DB2D43"
                          : this.state.bachata
                          ? "#FF8002"
                          : "black"
                      }
                    >
                      <MapView.Callout
                        onPress={() => {
                          this.showMoreDesc(item._id);
                        }}
                      >
                        <View>
                          <Text>{item.title}</Text>
                          <Text>
                            {item.date !== undefined
                              ? item.date.split("T")[0]
                              : ""}
                          </Text>
                        </View>

                        <TouchableOpacity>
                          <Text
                            style={{ padding: 10, backgroundColor: "white" }}
                          >
                            Y ALLER!
                          </Text>
                        </TouchableOpacity>
                      </MapView.Callout>
                    </MapView.Marker>
                  </View>
                );
              })}
          </MapView>
        </View>
      );
    }
  }
  // fonction showMore qui au click execute le filtre et le met a jour
  showMoreBachata = item => {
    let filterBachata = this.state.bachata;
    this.setState({
      bachata: !filterBachata
    });
  };
  showMoreKizomba = item => {
    let filterKizomba = this.state.kizomba;
    this.setState({
      kizomba: !filterKizomba
    });
  };
  showMoreSalsa = item => {
    let filterPorto = this.state.porto;
    this.setState({
      porto: !filterPorto
    });
    let filterCubaine = this.state.cubaine;
    this.setState({
      cubaine: !filterCubaine
    });
  };
  showMoreDesc = item => {
    this.props.navigation.navigate("Description", { id: item });
  };
  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/events");
    this.setState({
      events: response.data
    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsRouge: {
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowColor: "#1A1111",
    shadowOpacity: 0.3,
    alignItems: "center",
    backgroundColor: "#DB2D43",
    padding: 22,
    width: 125
  },
  buttonsVert: {
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowColor: "#1A1111",
    shadowOpacity: 0.3,
    alignItems: "center",
    backgroundColor: "#0A9A97",
    padding: 22,
    width: 125
  },
  buttonsOrange: {
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowColor: "#1A1111",
    shadowOpacity: 0.3,
    alignItems: "center",
    backgroundColor: "#FF8002",
    padding: 22,
    width: 125
  }
});

export default ListSoirees;
