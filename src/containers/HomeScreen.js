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
        <View>
          <TouchableHighlight
            underlayColor={"#CFAF90"}
            style={styles.button}
            onPress={this.showMoreFestival}
          >
            <Text style={[styles.countText]}> FESTIVALS </Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={"#7C5D98"}
            style={styles.button}
            onPress={this.showMoreCours}
          >
            <Text style={[styles.countText]}> COURS </Text>
          </TouchableHighlight>
        </View>
        <Button title="Sign in" onPress={() => this.signInAsync()} />
        <Button title="Sign up" onPress={() => this.signUpAsync()} />
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
    paddingHorizontal: 35
  },
  button: {
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    alignItems: "center",
    backgroundColor: "white",
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
