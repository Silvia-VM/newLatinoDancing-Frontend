import React from "react";
import { Button, Text } from "react-native";

class Compteur extends React.Component {
  state = {
    compteur: 0
  };
  handleClick = async (instance, event) => {
    alert("C'est voté");
    // instance.setState({ compteur: instance.state.compteur + 1 });
    // const response = await axios.get("http://localhost:3000/events");
  };

  render() {
    return (
      <View>
        <Button onPress={this.handleClick}>
          <Text>kjhgf</Text>
        </Button>
        <View>
          <Text>{this.state.compteur}</Text>
        </View>
      </View>
    );
  }
}

export default Compteur;
