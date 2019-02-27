import React, { Component } from "react";
import { View, AsyncStorage, Alert } from "react-native";
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

  componentDidMount = () => {
    AsyncStorage.getItem("age")
      .then(value => {
        this.setState({ age: value });
      })
      .done();

    AsyncStorage.getItem("height")
      .then(value => {
        this.setState({ height: value });
      })
      .done();

    AsyncStorage.getItem("weight")
      .then(value => {
        this.setState({ weight: value });
      })
      .done();
  };

  handleSubmit = () => {
    if ((this.state.age && this.state.weight && this.state.height) === null) {
      Alert.alert("Insereaza toate datele");
    } else {
      AsyncStorage.multiSet([
        ["age", this.state.age],
        ["height", this.state.height],
        ["weight", this.state.weight]
      ]);
    }
  };

  handleRemove = () => {
    let removeKeys = ["age", "weight", "height"];
    AsyncStorage.multiRemove(removeKeys);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        <View style={{ padding: 10 }}>
          <TextField
            label="Varsta"
            keyboardType="numeric"
            maxLength={3}
            tintColor="#E62027"
            value={this.state.age}
            onChangeText={age => this.setState({ age })}
          />

          <TextField
            label="Inaltimea"
            keyboardType="numeric"
            suffix="cm"
            maxLength={3}
            tintColor="#E62027"
            value={this.state.height}
            onChangeText={height => this.setState({ height })}
          />

          <TextField
            label="Masa"
            keyboardType="numeric"
            suffix="kg"
            maxLength={3}
            tintColor="#E62027"
            value={this.state.weight}
            onChangeText={weight => this.setState({ weight })}
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
            <Button raised accent text="Reset" onPress={this.handleRemove} />
          </View>
        </View>
      </View>
    );
  }
}
