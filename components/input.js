import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";
import Radiobutton from "./radiobutton";

export default class Input extends Component {
  state = {
    varsta: " ",
    inaltimea: " ",
    kilograme: " "
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
        <TextInput
          placeholder="Varsta"
          keyboardType="number-pad"
          selectionColor="#E62027"
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleVarsta}
        />

        <TextInput
          placeholder="Inaltimea"
          keyboardType="number-pad"
          selectionColor="#E62027"
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleInaltimea}
        />

        <TextInput
          placeholder="Masa"
          keyboardType="number-pad"
          selectionColor="#E62027"
          underlineColorAndroid="#E62027"
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleKilograme}
        />

        <Radiobutton />

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
  input: {
    margin: 10,
    padding: 10,
    height: 40,
    borderColor: "#dbdee0",
    borderWidth: 0.3
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
