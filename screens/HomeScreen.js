/* @flow */

import React, { Component } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet, 
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class HomeScreen extends Component {
    state={
        email:''
    }
    static navigationOptions={
    title:'Home'
  }
  logout(){
      firebase.auth().signOut()
      .catch(error=>{
          Alert.alert(error.message)
      })
  }
  componentDidMount(){
      firebase.auth().onAuthStateChanged(user=>{
          if (user) {
              this.setState({email:user.email})
          } else {
            this.props.navigation.replace('Login')  
          }
      })
  }

  render() {
    return (
      <View style={styles.container}>
<Text>
    {this.state.email}
</Text>
     <Button 
       onPress={()=>this.logout()}
        mode="contained">
    LogOut
  </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
