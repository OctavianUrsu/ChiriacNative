import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";

class Forma extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Masa ideală: {idealWeightRounded} kg</Text>
        <Text>BMR: {bmrRounded} cal/zi</Text>
      </View>
    );
  }
}

export default Forma;
