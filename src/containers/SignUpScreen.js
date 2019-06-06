import React from "react";
import {
  Button,
  AsyncStorage,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import axios from "axios";

class SignUpScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Inscription"
    };
  };

  handleChange = (text, name) => {
    this.setState({
      [name]: text
    });
  };

  render() {
    return (
      <View
        style={styles.container}
        // style={{
        //   flex: 1,
        //   backgroundColor: "#9A566A",
        //   justifyContent: "center",
        //   alignItems: "center"
        // }}
      >
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={"#fff5ee"}
          name="name"
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#fff5ee"}
          name="email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          require={false}
          placeholder="password"
          placeholderStyle={styles.placeholder}
          placeholderTextColor={"#fff5ee"}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        {/* <TouchableHighlight title="Création d'un compte" onPress={this.signUpAsync}>

        </TouchableHighlight> */}
        <TouchableOpacity onPress={this.signUpAsync} style={styles.button}>
          <Text style={styles.text}>Création d'un compte</Text>
        </TouchableOpacity>

        {/* <Button title="Création d'un compte" onPress={this.signUpAsync} /> */}
      </View>
    );
  }

  //   signUpAsync = async () => {
  //     await AsyncStorage.setItem("userToken", "abc");
  //     this.props.navigation.navigate("App");
  //   };
  // }

  signUpAsync = async () => {
    const response = await axios.post("http://localhost:3000/signup", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    if (response.data.token) {
      await AsyncStorage.setItem("userToken", "abc");

      this.props.navigation.navigate("App");
      alert("Votre compte est crée");
    } else {
      alert("Invalid email/password");
    }
  };
}
// signInAsync = async () => {
//     const response = await axios.post("http://localhost:3000/signin“, {
//       email: this.state.email,
//       password: this.state.password
//     });

//     if (response.data.token) {
//       await AsyncStorage.setItem(“userToken”, “abc”);
//       this.props.navigation.navigate(“App”);
//       alert(“Vous êtes connecté“);
//     } else {
//       alert(“Invalid email/password”);
//     }
//   };
//  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9A566A",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    fontSize: 18,
    // fontFamily: "Open Sans",
    color: "#FFFFFF",
    height: 44,
    width: 300,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#FFFFFF",
    marginBottom: 15
  },
  title: {
    marginBottom: 50,
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "100",
    fontWeight: "bold"
  },
  button: {
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    height: 60,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#9A566A",
    fontSize: 20
  }
  //   placeholder: {
  //     TextColor: "#FFFFFF"
  //   }
});

export default SignUpScreen;
