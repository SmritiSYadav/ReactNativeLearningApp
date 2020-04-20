
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Device Info",
    headerShown: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#D12765"
    }
  });
  render() {
    const {navigate} =this.props.navigation;

    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style = {styles.title}>
            Calculator
          </Text>
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
    },
    title: {
      color: "#D12765",
      fontSize: 20,
      height: 80,
    }
  });

  export default ProfileScreen;
