import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Text } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Button } from "react-native-material-ui";
import RadioGroup from "react-native-radio-buttons-group";

export default class Input extends Component {
  state = {
    varsta: "",
    inaltimea: "",
    masa: "",
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

  onPress = data => this.setState({ data });

  componentDidMount = () => {
    try {
      AsyncStorage.getItem("varsta")
        .then(value => {
          this.setState({ varsta: value });
        })
        .done();

      AsyncStorage.getItem("inaltimea")
        .then(value => {
          this.setState({ inaltimea: value });
        })
        .done();

      AsyncStorage.getItem("masa")
        .then(value => {
          this.setState({ masa: value });
        })
        .done();
    } catch (error) {
      console.log("Error showing data" + error);
    }
  };

  getInitialState = () => {
    try {
      return {};
    } catch (error) {
      console.log("Error initialising data" + error);
    }
  };

  saveDataVarsta = value => {
    AsyncStorage.setItem("varsta", value);
    this.setState({ varsta: value });
  };

  saveDataInaltimea = value => {
    AsyncStorage.setItem("inaltimea", value);
    this.setState({ inaltimea: value });
  };

  saveDataMasa = value => {
    AsyncStorage.setItem("masa", value);
    this.setState({ masa: value });
  };

  submitDataVarsta = value => {
    AsyncStorage.setItem("varsta", this.state.varsta);
  };

  submitDataInaltimea = value => {
    AsyncStorage.setItem("inaltimea", this.state.inaltimea);
  };

  submitDataMasa = value => {
    AsyncStorage.setItem("masa", this.state.masa);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextField
          label="Varsta"
          keyboardType="numeric"
          maxLength={3}
          tintColor="#E62027"
          value={this.state.varsta}
          onChangeText={text => this.saveDataVarsta(text)}
        />

        <TextField
          label="Inaltimea"
          keyboardType="numeric"
          suffix="cm"
          maxLength={3}
          tintColor="#E62027"
          value={this.state.inaltimea}
          onChangeText={text => this.saveDataInaltimea(text)}
        />

        <TextField
          label="Masa"
          keyboardType="numeric"
          suffix="kg"
          maxLength={3}
          tintColor="#E62027"
          value={this.state.masa}
          onChangeText={text => this.saveDataMasa(text)}
        />

        <View style={styles.radiobutton}>
          <RadioGroup
            radioButtons={this.state.data}
            onPress={this.onPress}
            flexDirection="row"
          />
        </View>

        <Button
          raised
          primary
          text="Save"
          onPress={
            (this.submitDataInaltimea,
            this.submitDataMasa,
            this.submitDataVarsta)
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
  },

  radiobutton: {
    padding: 10
  }
});
