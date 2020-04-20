/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './src/components/Login/Login';
import DashboardScreen from './src/components/Dashboard/Dashboard';
import ToDoListScreen from './src/components/ToDoList/ToDoList';
import ProfileScreen from './src/components/Profile/Profile';
import CalculatorScreen from './src/components/Calculator/Calculator';
import APICallingScreen from './src/components/EmployeeList/APICalling';
import DeviceInfoScreen from './src/components/DeviceInfo/DeviceInfo';
import FeedbackScreen from './src/components/Feedback';

export default class App extends Component {
  render() {
    const Apps = createAppContainer(RootStack)
    return <Apps />
  }
}

const RootStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Dashboard: { screen: DashboardScreen },
    ToDoList: { screen: ToDoListScreen },
    Profile: { screen: ProfileScreen },
    Calculator: { screen: CalculatorScreen },
    APICalling: { screen: APICallingScreen },
    DeviceInfo: { screen: DeviceInfoScreen },
    Feedback: { screen: FeedbackScreen },
  },
  {
      initialRouteName: 'Feedback',
  }
  
  );