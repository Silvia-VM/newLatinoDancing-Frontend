import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import axios from "axios";

class ListFestival extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Listes des Festivals"
    };
  };
  state = {
    festivals: null
  };
  render() {
    if (this.state.festivals === null) {
      return <Text> Loading</Text>;
    }
    return (
      <View>
        <View style={styles.container} />
        <Text>Liste des Festivals</Text>
        <FlatList
          ItemSeparatorComponent={() => {
            return <View style={{ backgroundColor: "red", height: 1 }} />;
          }}
          data={this.state.festivals}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: "black", fontSize: 20 }}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/festivals");
    this.setState({
      festivals: response.data,
      isLoading: false
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default ListFestival;
