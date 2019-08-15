/* @flow */

import React, { Component } from 'react';
import { Button,TextInput } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  Alert 
} from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
  state={
    email:'',
    password:''
  }
  static navigationOptions={
    title:'Login'
  }
  
  userSignin(email,passowrd)
{
firebase.auth().signInWithEmailAndPassword(email,passowrd)
.then(()=>{
  this.props.navigation.replace('Home')
}).catch(error=>{
  Alert.alert(error.message)
})
}  

render() {
    return (
      <View style={styles.container}>
         <TextInput
        label='Email'
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
      />
      <TextInput
        label='PassWord'
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        
      />
       <Button  mode="contained"
       onPress={()=>this.userSignin(this.state.email,this.state.password)}
       >
    Login
  </Button>
  <TouchableOpacity
  onPress={()=>this.props.navigation.navigate('Sign')}
  >
    <Text>
      Don't Have An Account
    </Text>
  </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
