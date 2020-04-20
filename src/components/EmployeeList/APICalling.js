
import React from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator, Image } from 'react-native';
import redux from 'redux';

class APICallingScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Employee List",
    headerShown: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#D12765"
    }
  });

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    const {navigate} =this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View style={styles.main}>
          <ActivityIndicator/>
      </View>
      ) 
    } else {
      return (
        <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={styles.itemView}>
            <Text style={styles.item}>Employee Id: {item.id}</Text>
            <Text style={styles.item}>Name: {item.employee_name}</Text>
            <Text style={styles.item}>Age: {item.employee_age}</Text>
            <Text style={styles.item}>Salary: {item.employee_salary}</Text>
            <View style={styles.separator}/>
          </View>
            }
        />
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      marginTop: 0,
      height: "100%",
      justifyContent: "center",
      flex: 1
    }, 
    container: {
      marginTop: 0,
    },
    itemView: {
      width: "100%",
    },
    item: {
      color: "black",
      fontSize: 20,
      padding: 5,
      justifyContent: "center",
      marginLeft: 40
    },
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: "#ccc"
    }
  });

  export default APICallingScreen;
