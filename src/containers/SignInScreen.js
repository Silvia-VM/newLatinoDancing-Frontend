import React from "react";
import {
  Button,
  AsyncStorage,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import axios from "axios";

import { Ionicons } from "@expo/vector-icons";

class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "SignIn"
    };
  };
  state = {
    email: "silvia@hotmail.fr",
    password: "silvia"
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#9A566A" }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Ionicons name="md-person" size={150} color="white" />

          <Text style={{ color: "white", fontSize: 40, fontWeight: "100" }}>
            Hello
          </Text>
        </View>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TextInput
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTextColor="white"
            placeholder="✉️ Email"
            style={styles.button}
          />

          <TextInput
            value={this.state.password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="white"
            placeholder="🔒 Password"
            style={styles.button}
          />
          <TouchableOpacity onPress={this.signInAsync} style={styles.press}>
            <Text
              style={{
                color: "#9A566A",
                fontSize: 20
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }

  signInAsync = async () => {
    const response = await axios.post("http://localhost:3000/signin", {
      email: this.state.email,
      password: this.state.password
    });

    if (response.data.token) {
      await AsyncStorage.setItem("userToken", response.data.token);
      this.props.navigation.navigate("App");
      alert("Vous êtes connecté");
    } else {
      alert("Invalid email/password");
    }
  };
}
const styles = StyleSheet.create({
  button: {
    color: "white",
    marginHorizontal: 40,
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 44
  },
  press: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 25
  }
});
export default SignInScreen;
