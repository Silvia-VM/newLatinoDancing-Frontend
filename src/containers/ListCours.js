import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import axios from "axios";

class ListCours extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Listes des Cours"
    };
  };
  state = {
    cours: null
  };
  render() {
    if (this.state.cours === null) {
      return <Text> Loading</Text>;
    }
    return (
      <View>
        <FlatList
          ItemSeparatorComponent={() => {
            return <View style={[styles.box]} />;
          }}
          data={this.state.cours}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={[styles.box]}>
                <View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#CFAF90",
                        fontSize: 17,
                        textAlign: "center"
                      }}
                    >
                      {item.title}-{item.ville}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text style={{ color: "black", fontSize: 13 }}>
                        {item.site}
                      </Text>
                      <Text style={{ color: "black", fontSize: 13 }}>
                        {item.telephone}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/cours");
    this.setState({
      cours: response.data,
      isLoading: false
    });
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white"
  },
  box: {
    flex: 1,
    shadowColor: "white",
    // backgroundColor: "black",
    padding: 10
  }
});

export default ListCours;
