import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

class DescSoirees extends React.Component {
  static navigationOptions = ({ navigation }) => {};
  state = {
    events: []
  };
  render() {
    if (this.state.events === null) {
      return <Text> Loading</Text>;
    } else {
      return (
        <View>
          <View style={styles.container} />
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.image}
              source={require("../../assets/image/soiree.jpg")}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#1A1111",
                fontSize: 15,
                textAlign: "right",
                margin: 10
              }}
            >
              {this.state.events.title}
            </Text>
            <View style={styles.box}>
              <Text>
                <Ionicons name="ios-calendar" size={30} />{" "}
                {this.state.events.date !== undefined
                  ? this.state.events.date.split("T")[0]
                  : ""}
              </Text>
              <Text>
                <Ionicons name="md-clock" size={30} />{" "}
                {this.state.events.horaire} -
                <Ionicons name="logo-euro" size={25} />{" "}
                {this.state.events.price} €
              </Text>
              <Text>
                <Ionicons name="ios-musical-notes" size={30} />{" "}
                {this.state.events.tags}
              </Text>
              <Text>
                <Ionicons name="md-map" size={30} /> {this.state.events.adresse}
              </Text>
            </View>
          </View>
          <View style={styles.textDesc}>
            <ScrollView>
              <Text style={{ color: "#4F515B" }}>
                {this.state.events.description}
              </Text>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/events");
    // Cherche event qui correspond à l'id du marker sur lequel on a cliqué
    var event = response.data.find(el => {
      return el._id === this.props.navigation.state.params.id;
    });

    this.setState({
      events: event
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  box: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#1A1111",
    borderBottomWidth: 3,
    shadowColor: "#1A1111",
    shadowOpacity: 0.1,
    marginTop: 3,
    paddingLeft: 18
  },
  textDesc: {
    width: 345,
    height: 310,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    borderBottomWidth: 3,
    shadowColor: "#1A1111",
    shadowOpacity: 0.1,
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 8,
    overflow: "scroll"
  },
  image: {
    width: 375,
    height: 200
  }
});

export default DescSoirees;
