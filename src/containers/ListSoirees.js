import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { MapView } from "expo";
import Geocoder from "react-native-geocoding";

class ListSoirees extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Map"
    };
  };
  state = {
    events: null
  };

  render() {
    if (this.state.events === null) {
      return <Text> Loading</Text>;
    }
    Geocoder.init("http://localhost:3000/");
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 48.856614,
            longitude: 2.3522219
          }}
          title={"Le Reacteur"}
          description={"La formation des champion·ne·s !"}
        />
      </MapView>
    );

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
      events: response.data,
      isLoading: false
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
