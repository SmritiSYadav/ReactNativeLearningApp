
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Profile",
    headerShown: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#D12765"
    }
  });

  constructor(props) {
    super(props);
    this.state = {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
    }
}

  editOptionValue(index, value) {
    console.log("enteredText");
  }

  render() {
    const {navigate} =this.props.navigation;

    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
          >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
          <View style = {styles.textView}>
            <TextInput style = {styles.title}
            placeholder="Enter a question"
            keyboardType='email-address'
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(value) => {this.editQuestionValue(value)}}
            >
            </TextInput>
          </View>
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
      flex: 1,
      width: "100%"
    }, 
    container: {
      marginTop: "33%",
      flex: 1,
      width: "100%",
    },
    textView: {
      backgroundColor: "#D12765",
      marginHorizontal: 10,
      marginVertical: 2,
      height: 44,
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
      color: "white",
      fontSize: 20,
      width: "90%",
      flex: 1,
    }
  });

  export default ProfileScreen;
