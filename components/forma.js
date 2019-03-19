import React, { Component } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";

class Forma extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    title: "Date Personale",
    headerStyle: {
      backgroundColor: "#E62027"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  async componentDidMount() {
    let getKeys = ["height", "selectedItem", "age", "weight"];
    await AsyncStorage.multiGet(getKeys).then(result =>
      this.setState({
        getHeight: result[0][1],
        getSelectedItem: result[1][1],
        getAge: result[2][1],
        getWeight: result[3][1]
      })
    );
  }

  render() {
    const heightInch = this.state.getHeight / 2.54; //height converted to inch
    let idealWeightRounded = null;
    let bmrRounded = null;

    if (this.state.getSelectedItem === "0") {
      const idealWeight = 50 + 2.3 * (heightInch - 60); //ideal weight calculator for male: Robinson calculator
      idealWeightRounded = idealWeight.toFixed(1); //ideal weight for male rounded
    } else {
      const idealWeight = 45.5 + 2.3 * (heightInch - 60); //ideal weight calculator for female: Robinson calculator
      idealWeightRounded = idealWeight.toFixed(1); //ideal weight for female rounded
    }

    if (this.state.getSelectedItem === "0") {
      const bmr =
        66.47 +
        13.75 * this.state.getWeight +
        5.003 * this.state.getHeight -
        6.755 * this.state.getAge;
      bmrRounded = bmr.toFixed(0);
    } else {
      const bmr =
        655.1 +
        9.563 * this.state.getWeight +
        1.85 * this.state.getHeight -
        4.676 * this.state.getAge;
      bmrRounded = bmr.toFixed(0);
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.tabs}>
          <Text style={{ padding: 20, fontSize: 15 }}>
            <Text style={styles.label}>Masa ideală: </Text>
            <Text>{idealWeightRounded} kg</Text>
          </Text>
        </View>

        <View style={styles.tabs}>
          <Text style={{ padding: 20, fontSize: 15 }}>
            <Text style={styles.label}>BMR: </Text>
            <Text style={{ textAlign: "right" }}>{bmrRounded} cal/zi</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#FAFAFA",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#D8D8D8",
    borderTopColor: "#FAFAFA"
  },

  label: {
    padding: 20,
    fontWeight: "bold"
  }
});

export default Forma;
