import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default class Menu extends Component {
  static navigationOptions = {
    title: "My Gym",
    headerStyle: {
      backgroundColor: "#E62027"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Date")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("./img/sport.png")}
          />
          <Text style={styles.text}>Date</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("./img/calendar.png")}
          />
          <Text style={styles.text}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Settings")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("./img/settings.png")}
          />
          <Text style={styles.text}>Setări</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    height: 100,
    width: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
    color: "#2C3A47"
  }
});
