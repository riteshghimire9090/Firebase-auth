/* @flow */

import React, { Component } from 'react';
import { Button,TextInput } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  Alert
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class SignupScreen extends Component {
  state={
    email:'',
    password:''
  }
  static navigationOptions={
    title:'SignUp'
  }
  userSignup(email,password){
    console.log(this.state);
    
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      this.props.navigation.replace('Home')
    })
    .catch(error=>{
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
       <Button 
       onPress={()=>this.userSignup(this.state.email,this.state.password)}
        mode="contained">
    SignUp
  </Button>
  <TouchableOpacity
  onPress={()=>this.props.navigation.navigate('Login')}
  >
    <Text>
      Already Have An Account
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
