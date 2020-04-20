import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class CalculatorScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Calculator",
    headerShown: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#D12765"
    }
  });
  render() {
    const {navigate} =this.props.navigation;
    const firstRow = ["AC", "+/-", "%"]
    const secondRow = ["7", "8", "9"]
    const thirdRow = ["4", "5", "6"]
    const fourthRow = ["1", "2", "3"]

    return (
     <View style={styles.background}>
    <View style={styles.container}>
      <View style = {styles.outputView}>
        <Text style = {styles.outputText}>
        </Text>
      </View>
      <View style = {styles.buttonView}>
        { firstRow.map((title) => <Text style={styles.darkGreyButton}> {title} </Text> )}
        <Text style={styles.orangeButton}> / </Text>
      </View>
      <View style = {styles.buttonView}>
        { secondRow.map((title) => <Text style={styles.greyButton}> {title} </Text> )}
        <Text style={styles.orangeButton}> * </Text>
      </View>
      <View style = {styles.buttonView}>
        { thirdRow.map((title) => <Text style={styles.greyButton}> {title} </Text> )}
        <Text style={styles.orangeButton}> - </Text>
      </View>
      <View style = {styles.buttonView}>
        { fourthRow.map((title) => <Text style={styles.greyButton}> {title} </Text> )}
        <Text style={styles.orangeButton}> +</Text>
      </View>
      <View style = {styles.buttonView}>
        <Text style={styles.buttonZero}> 0 </Text>
        <Text style={styles.greyButton}> . </Text>
        <Text style={styles.orangeButton}> = </Text>
      </View>
    </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#595959",
    height: "100%",
  },
  container: {
    marginTop: 64,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#595959",
    alignItems: "center",
  },
  outputView: {
    height: 150,
    backgroundColor: "#595959",
    width: "100%",
    borderWidth: 0.3,
    borderColor: "black",
  },
  outputText: {
    fontSize: 50,
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  darkGreyButton: {
    color: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "black",
    flex: 1,
    height: "100%",
    fontSize: 36,
    backgroundColor: "#888888",
  },
  greyButton: {
    color: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "black",
    flex: 1,
    height: "100%",
    fontSize: 36,
    backgroundColor: "#aaaaaa",
  },
  orangeButton: {
    color: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "black",
    flex: 1,
    height: "100%",
    fontSize: 36,
    backgroundColor: "#FFA500",
  },
  buttonZero: {
    color: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "black",
    flex: 2,
    height: "100%",
    backgroundColor: "#aaaaaa",
    fontSize: 36,
  }
});

  export default CalculatorScreen;
