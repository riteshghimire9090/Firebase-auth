/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as firebase from 'firebase';
import {firebaseConfig} from './Config/config';

firebase.initializeApp(firebaseConfig);
const AppNavigator = createStackNavigator({
  Loading:LoadingScreen,
  Sign:SignupScreen,
  Login:LoginScreen,
  
  Home:HomeScreen
}, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'green',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default  createAppContainer(AppNavigator);
