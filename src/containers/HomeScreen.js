import React from "react";
import {
  Button,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  underlayColor
} from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // return {
    //   tabBarLabel: "Accueil"
    // };
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={{ fontWeight: "bold", fontSize: 28 }}>Categories</Text> */}
        <Image
          style={styles.image}
          source={require("../../assets/image/logo.jpg")}
        />
        <View>
          <TouchableHighlight
            underlayColor={"#DE7599"}
            style={styles.button}
            onPress={this.showMoreApp}
          >
            <Text style={[styles.countText]}> SOIRÉES </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  showMoreApp = () => {
    this.props.navigation.navigate("Lists");
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 22
  },
  countText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  image: {
    width: 305,
    height: 300
  }
});

export default HomeScreen;
