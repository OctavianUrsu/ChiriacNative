import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

export default class Radiobutton extends Component {
  state = {
    data: [
      {
        label: "Male",
        color: "#1e90ff"
      },
      {
        label: "Female",
        color: "#ff6b81"
      }
    ]
  };

  // update state
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.data[0].label;
    return (
      <View style={styles.container}>
        <RadioGroup
          radioButtons={this.state.data}
          onPress={this.onPress}
          flexDirection="row"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  valueText: {
    fontSize: 18,
    marginBottom: 50
  }
});
