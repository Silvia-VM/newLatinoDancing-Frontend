import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
  state = {
    events: []
  };

  render() {
    if (this.state.events.length === 0) {
      return <Text> Loading</Text>;
    } else {
      return (
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
          {this.state.events.map((item, index) => {
            return (
              <View key={index}>
                <MapView.Marker
                  coordinate={{
                    latitude: Number(item.latitude),
                    longitude: Number(item.longitude)
                  }}
                  // title={item.title}
                  // description={item.date}
                >
                  <MapView.Callout
                    onPress={() => {
                      this.showMoreDesc(item._id);
                    }}
                  >
                    <View>
                      <Text>{item.title}</Text>
                      <Text>{item.date}</Text>
                    </View>

                    <TouchableOpacity>
                      <Text style={{ padding: 10, backgroundColor: "white" }}>
                        Y ALLER!
                      </Text>
                    </TouchableOpacity>
                  </MapView.Callout>
                </MapView.Marker>
                {/*                 
                <MapView.Marker
                  coordinate={{
                    latitude: Number(item.latitude),
                    longitude: Number(item.longitude)
                  }}
                  // title={item.title}
                  title={item.title}
                  description={item.date}
                  // onCalloutPress={"Click"}
                />
                <MapView.Callout onPress={() => console.log("This is logged")}>
                  <Link
                    to="/random/route"
                    onPress={() => console.log("This is not fired")}
                  >
                    <Text>Click Me!</Text>
                  </Link>
                </MapView.Callout> */}
              </View>
            );
          })}
        </MapView>
      );
    }

    // {/* .map pour parcourir tous les events, et ajouter un marker pour chacun d'entre eux */}
    // {/* <MapView.Marker
    //   coordinate={{
    //     latitude: 48.856614,
    //     longitude: 2.3522219
    //   }}
    //   title={"Le Reacteur"}
    //   description={"La formation des champion·ne·s !"}
    // /> */}

    /* <FlatList
          ItemSeparatorComponent={() => {
            return <View style={{ backgroundColor: "red", height: 1 }} />;
          }}
          data={this.state.events}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: "black", fontSize: 20 }}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        /> */
  }
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default ListSoirees;
