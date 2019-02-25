import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RadioButton from "./radiobutton";
import { TextField } from "react-native-material-textfield";
import { Button } from "react-native-material-ui";

export default class Input extends Component {
  state = {
    varsta: "",
    inaltimea: "",
    kilograme: ""
  };
  handleVarsta = text => {
    this.setState({ varsta: text });
  };
  handleInaltimea = text => {
    this.setState({ inaltimea: text });
  };
  handleKilograme = text => {
    this.setState({ kilograme: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextField
          label="Varsta"
          keyboardType="numeric"
          maxLength={3}
          tintColor="#E62027"
          value={this.state.text}
          onChangeText={this.handleVarsta}
        />

        <TextField
          label="Inaltimea"
          keyboardType="numeric"
          suffix="cm"
          maxLength={3}
          tintColor="#E62027"
          value={this.state.text}
          onChangeText={this.handleInaltimea}
        />

        <TextField
          label="Masa"
          keyboardType="numeric"
          suffix="kg"
          maxLength={3}
          tintColor="#E62027"
          value={this.state.text}
          onChangeText={this.handleKilograme}
        />

        <RadioButton />

        <Button
          raised
          primary
          text="Save"
          onPress={() =>
            this.date(
              this.state.varsta,
              this.state.inaltimea,
              this.state.kilograme
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});
