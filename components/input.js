import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextField } from "react-native-material-textfield";

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
          maxLength="3"
          tintColor="#E62027"
          value={this.state.text}
          onChangeText={this.handleVarsta}
        />

        <TextField
          label="Inaltimea"
          keyboardType="numeric"
          suffix="cm"
          maxLength="3"
          tintColor="#E62027"
          value={this.state.text}
          onChangeText={this.handleInaltimea}
        />

        <TextField
          label="Masa"
          keyboardType="numeric"
          suffix="kg"
          maxLength="3"
          tintColor="#E62027"
          value={this.state.text}
          onChangeText={this.handleKilograme}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.date(
              this.state.varsta,
              this.state.inaltimea,
              this.state.kilograme
            )
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  },
  submitButton: {
    backgroundColor: "#962929",
    padding: 7,
    margin: 100,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
