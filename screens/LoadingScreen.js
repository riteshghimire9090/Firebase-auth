/* @flow */

import React, { Component } from 'react';
import {
  View,
  
  StyleSheet,
  ActivityIndicator
  
} from 'react-native';
import * as firebase from 'firebase';

export default class LoadingScreen extends Component {
  componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              this.props.navigation.replace('Home')
                  }
                  else{
                    this.props.navigation.replace('Login') 
                  }
      })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
