
import React, {useState}  from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import feedbackDataAPI from "./feedbackListAPI.json";
import feedbackListTemplate from "./feedbackListTemplate.json";

class FeedbackScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Feedback",
    headerShown: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#D12765"
    }
  });

  constructor(props) {
    super(props);
    this.state = {
        feedbackData: feedbackListTemplate,
        categoryData: null
    }
  }


  render() {
    const {navigate} = this.props.navigation;
    let categories = ["New", "In Progress", "Completed"];
    //var newFeedbackData = null;
    //const [newFeedbackData, setNewFeedbackData] = useState();

    const createFilterJSON = () => {
        console.log("Before Parsing");
        console.log(this.state.feedbackData);
        console.log("Before Parsing");
        console.log(feedbackDataAPI);
        var tempFeedback = [...this.state.feedbackData];

        for(let index = 0; index < categories.length; index++) {
            var currentTitle = categories[index];
            var tempArray = feedbackDataAPI.data.filter((feedback) => 
              feedback.status === currentTitle
            );
            console.log("tempArray");
            console.log(tempArray);

            tempFeedback[index].title = categories[index];
            tempFeedback[index].data = tempArray;
        }
        this.setState({
          feedbackData: tempFeedback
        });
        console.log("After Parsing");
        console.log(this.state.feedbackData);
    }

    return (
      <View style={styles.main}>
          <View style={styles.container}>
            <TouchableOpacity style = {styles.button} onPress = {createFilterJSON}>
              <Text style = {styles.title}>
                  Parse JSON
              </Text>
            </TouchableOpacity>
            <Text>
              {this.props.feedbackData}
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

export default FeedbackScreen;
