import React, { Component } from "react";
import { View, Text } from "react-native";

class Forma extends Component {
  render() {
    const height = 195; //height input from user
    const heightInch = height / 2.54; //height converted to inch

    const idealWeightMale = 50 + 2.3 * (heightInch - 60); //ideal weight calculator for male: Robinson calculator
    const idealWeightMaleRounded = idealWeightMale.toFixed(1); //ideal weight for male rounded

    const idealWeightFemale = 45.5 + 2.3 * (heightInch - 60); //ideal weight calculator for female: Robinson calculator
    const idealWeightFemaleRounded = idealWeightFemale.toFixed(1); //ideal weight for female rounded

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{idealWeightMaleRounded}</Text>
        <Text>{idealWeightFemaleRounded}</Text>
      </View>
    );
  }
}

export default Forma;
