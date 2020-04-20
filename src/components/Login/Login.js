import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <View style={styles.container}>
          <Text style= {styles.title}> IBM </Text>
          <TextInput placeholder= "Username"
            style={styles.textInput}
          />
          <TextInput placeholder= "Password"
            style={styles.textInput}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity onPress = {() => navigate('Dashboard')}>
              <Text style = {styles.button}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 0,
    height:"100%"
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000000",
    padding: "33%",
    fontSize: 50,
  },
  textInput: {
    padding: 10,
    fontSize: 22,
    borderColor: "#000000",
    borderWidth: 2,
    width: "75%",
    height: 50,
    marginBottom: 20,
    borderRadius: 5
  },
  buttonView: {
    backgroundColor: "#D12765",
    width: "75%",
    height: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  button: {
    color: "white",
    fontSize: 20,
  }
});

export default LoginScreen;