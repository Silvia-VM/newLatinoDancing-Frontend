import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { MapView } from "expo";

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
            let coord = {};
            return (
              <MapView.Marker
                key={index}
                coordinate={{
                  latitude: Number(item.latitude),
                  longitude: Number(item.longitude)
                }}
                title={item.title}
                description={item.description}
              />
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
