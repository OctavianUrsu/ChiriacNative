import React, { Component } from "react";
import { View, AsyncStorage, Alert } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Button } from "react-native-material-ui";
import SwitchSelector from "react-native-switch-selector";

export default class Input extends Component {
  state = {
    age: "",
    height: "",
    weight: "",
    selectedItem: "",
    data: [
      {
        label: "Male",
        value: "0",
        color: "#1e90ff"
      },
      {
        label: "Female",
        value: "1",
        color: "#ff6b81"
      }
    ]
  };

  async componentDidMount() {
    let getKeys = ["age", "height", "weight", "selectedItem"];
    const [age, height, weight, selectedItem] = await AsyncStorage.multiGet(
      getKeys
    );
    this.setState({
      age: age[1],
      height: height[1],
      weight: weight[1],
      selectedItem: selectedItem[1]
    });
  }

  handleSubmit = async () => {
    if ((this.state.age && this.state.weight && this.state.height) === null) {
      Alert.alert("Eroare", "Introduceți toate datele");
    } else {
      await AsyncStorage.multiSet([
        ["age", this.state.age],
        ["height", this.state.height],
        ["weight", this.state.weight],
        ["selectedItem", this.state.selectedItem]
      ]);
    }
  };

  handleRemove = async () => {
    let removeKeys = ["age", "weight", "height"];
    await AsyncStorage.multiRemove(removeKeys);
    this.setState({
      age: "",
      weight: "",
      height: ""
    });
  };

  handleRadio = data => {
    this.setState({ selectedItem: data });
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
          <SwitchSelector
            value={this.state.selectedItem}
            onPress={value => this.setState({ selectedItem: value })}
            textColor={"#E62027"}
            selectedColor={"#fff"}
            buttonColor={"#E62027"}
            borderColor={"#E62027"}
            fontSize={"16"}
            hasPadding
            options={[
              { label: "Male", value: "0" },
              { label: "Female", value: "1" }
            ]}
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
