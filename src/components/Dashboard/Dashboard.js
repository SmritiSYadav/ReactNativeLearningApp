
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class DashboardScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Dashboard",
    headerShown: false,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#D12765"
    }
  });
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.main}>
        <View style={styles.container}>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('Calculator')}>
          <Text style = {styles.title}>
            Calculator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('ToDoList')}>
          <Text style = {styles.title}>
            To Do List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('Profile')}>
          <Text style = {styles.title}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('APICalling')}>
          <Text style = {styles.title}>
            API Calling
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('DeviceInfo')}>
          <Text style = {styles.title}>
            Device Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('Feedback')}>
          <Text style = {styles.title}>
            Feedback
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('Login')}>
          <Text style = {styles.title}>
            Logout
          </Text>
        </TouchableOpacity>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      marginTop: 0,
      height: "100%",
    }, 
    container: {
      marginTop: "33%",
      width: "80%",
    },
    title: {
      color: "#fff",
      fontSize: 20,
      padding: 10,
      textAlign: "center",
    },
    button: {
      borderRadius: 5,
      height: 50,
      backgroundColor: "#D12765",
      marginBottom: 20,
    }
  });

  export default DashboardScreen;
