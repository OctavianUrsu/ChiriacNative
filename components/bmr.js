import React, { Component } from "react";
import { View, Text } from "react-native";

class Bmr extends Component {
  render() {
    const age = 22; //age input from
    const weight = 85; //weight in kg input from user
    const height = 195; //height in cm input from user

    const bmrMale = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
    const bmrMaleRounded = bmrMale.toFixed(0);
    const bmrFemale = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    const bmrFemaleRounded = bmrFemale.toFixed(0);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{bmrMaleRounded}</Text>
        <Text>{bmrFemaleRounded}</Text>
      </View>
    );
  }
}

export default Bmr;
