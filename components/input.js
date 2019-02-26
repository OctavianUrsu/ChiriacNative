import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Keyboard } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Button } from "react-native-material-ui";
import RadioGroup from "react-native-radio-buttons-group";

export default class Input extends Component {
  state = {
    age: "",
    height: "",
    weight: "",
    data: [
      {
        label: "Male",
        value: "male",
        color: "#1e90ff"
      },
      {
        label: "Female",
        value: "female",
        color: "#ff6b81"
      }
    ]
  };

  componentWillMount = () => {
    this.getValueFromStorage;
  };

  getValueFromStorage = () => {
    AsyncStorage.multiGet(["age", "height", "weight"]).then(value => {
      multiSet([["age", value], ["height", value], ["weight", value]]);
    });
  };

  getInitialState = () => {
    try {
      return {};
    } catch (error) {
      console.log("Error initialising data" + error);
    }
  };

  handleAge = age => {
    this.setState({ age });
  };

  handleHeight = height => {
    this.setState({ height });
  };

  handleWeight = weight => {
    this.setState({ weight });
  };

  handleSubmit = () => {
    AsyncStorage.multiSet([
      ["age", this.state.age],
      ["height", this.state.height],
      ["weight", this.state.weight]
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <TextField
            label="Varsta"
            keyboardType="numeric"
            maxLength={3}
            tintColor="#E62027"
            value={this.state.age}
            onChangeText={this.handleAge}
          />

          <TextField
            label="Inaltimea"
            keyboardType="numeric"
            suffix="cm"
            maxLength={3}
            tintColor="#E62027"
            value={this.state.height}
            onChangeText={this.handleHeight}
          />

          <TextField
            label="Masa"
            keyboardType="numeric"
            suffix="kg"
            maxLength={3}
            tintColor="#E62027"
            value={this.state.weight}
            onChangeText={this.handleWeight}
          />
        </View>

        <View style={{ padding: 10 }}>
          <RadioGroup
            radioButtons={this.state.data}
            onPress={this.onPress}
            flexDirection="row"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 10
          }}
        >
          <View style={{ flex: 1 }}>
            <Button raised primary text="Save" onPress={this.handleSubmit} />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Button raised accent text="Reset" />
          </View>
        </View>
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
