import React from "react";
import {
  Button,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Accueil"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../../assets/image/logo.jpg")}
          />
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <TouchableHighlight
            underlayColor={"#DE7599"}
            style={styles.button}
            onPress={this.showMoreApp}
          >
            <Text style={[styles.countText]}> SOIRÉES </Text>
          </TouchableHighlight>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableHighlight
            underlayColor={"#DE7599"}
            style={styles.button}
            onPress={this.showMoreFestival}
          >
            <Text style={[styles.countText]}> FESTIVALS </Text>
          </TouchableHighlight>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableHighlight
            underlayColor={"#DE7599"}
            style={styles.button}
            onPress={this.showMoreCours}
          >
            <Text style={[styles.countText]}> COURS </Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            paddingHorizontal: 45,
            textcolor: "red"
          }}
        >
          <Button title="Sign in" onPress={() => this.signInAsync()} />
          <Button title="Sign up" onPress={() => this.signUpAsync()} />
        </View>
      </View>
    );
  }

  showMoreApp = () => {
    this.props.navigation.navigate("Lists");
  };
  showMoreFestival = () => {
    this.props.navigation.navigate("Festival");
  };
  showMoreCours = () => {
    this.props.navigation.navigate("Cours");
  };
  signInAsync = () => {
    this.props.navigation.navigate("SignIn");
  };

  //   signUpAsync = () => {
  //     this.props.navigation.navigate("AuthUp");
  //   };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E8E8E8"
  },

  button: {
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    alignItems: "center",
    backgroundColor: "#C58595",
    padding: 23,
    marginTop: 13
  },
  countText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E8E8E8"
  },
  image: {
    width: 355,
    height: 350
  }
});

export default HomeScreen;
