import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

class ListSoirees extends React.Component {
  state = {
    events: null
  };
  render() {
    if (this.state.events === null) {
      return <Text> Loading</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
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
        />
      </View>
    );
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/");
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
