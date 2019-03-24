import React, { Component } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";

class Forma extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    title: "Date Personale",
    headerStyle: {
      backgroundColor: "#E62027",
      borderBottomWidth: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  async componentDidMount() {
    let getKeys = ["height", "selectedItem", "age", "weight"];
    await AsyncStorage.multiGet(getKeys).then(result =>
      this.setState({
        getHeight: result[0][1],
        getSelectedItem: result[1][1],
        getAge: result[2][1],
        getWeight: result[3][1]
      })
    );
  }

  render() {
    const heightInch = this.state.getHeight / 2.54; //height converted to inch
    let idealWeightRounded = null;
    let bmrRounded = null;

    if (this.state.getSelectedItem === "0") {
      const idealWeight = 50 + 2.3 * (heightInch - 60); //ideal weight calculator for male: Robinson calculator
      idealWeightRounded = idealWeight.toFixed(1); //ideal weight for male rounded
    } else {
      const idealWeight = 45.5 + 2.3 * (heightInch - 60); //ideal weight calculator for female: Robinson calculator
      idealWeightRounded = idealWeight.toFixed(1); //ideal weight for female rounded
    }

    if (this.state.getSelectedItem === "0") {
      const bmr =
        66.47 +
        13.75 * this.state.getWeight +
        5.003 * this.state.getHeight -
        6.755 * this.state.getAge;
      bmrRounded = bmr.toFixed(0);
    } else {
      const bmr =
        655.1 +
        9.563 * this.state.getWeight +
        1.85 * this.state.getHeight -
        4.676 * this.state.getAge;
      bmrRounded = bmr.toFixed(0);
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#BF0000" }}>
          <Text style={styles.headerMenu}>Personale</Text>
        </View>

        <View style={styles.tabs}>
          <Text style={styles.fullText}>
            <Text style={styles.label}>Vârsta: </Text>
            <Text>{this.state.getAge} ani</Text>
          </Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.fullText}>
            <Text style={styles.label}>Masa: </Text>
            <Text>{this.state.getWeight} kg</Text>
          </Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.fullText}>
            <Text style={styles.label}>Înălțimea: </Text>
            <Text>{this.state.getHeight} cm</Text>
          </Text>
        </View>

        {/*--------------------*/}

        <View style={{ backgroundColor: "#BF0000" }}>
          <Text style={styles.headerMenu}>Fitness</Text>
        </View>

        <View style={styles.tabs}>
          <Text style={styles.fullText}>
            <Text style={styles.label}>Masa ideală: </Text>
            <Text>{idealWeightRounded} kg</Text>
          </Text>
        </View>

        <View style={styles.tabs}>
          <Text style={styles.fullText}>
            <Text style={styles.label}>BMR: </Text>
            <Text>{bmrRounded} cal/zi</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#FAFAFA",
    borderRadius: 0,
    borderWidth: 0.5,
    borderColor: "#D8D8D8",
    borderTopColor: "#FAFAFA"
  },

  label: {
    padding: 20,
    fontWeight: "bold"
  },

  fullText: {
    padding: 15,
    fontSize: 14
  },

  headerMenu: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default Forma;
