/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import firebase from 'firebase';
import Login from './components/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {


  componentWillMount(){
    config = {
      apiKey: "AIzaSyB1Kd3cJGGrGyCMFp1xda1TQmeQRQSRuP0",
      authDomain: "loctrac-1555608597558.firebaseapp.com",
      databaseURL: "https://loctrac-1555608597558.firebaseio.com",
      projectId: "loctrac-1555608597558",
      storageBucket: "loctrac-1555608597558.appspot.com",
      messagingSenderId: "179021621952"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
  //     <View style={styles.container}>
  //       <MapView
  //    provider={PROVIDER_GOOGLE}
  //    style={styles.map}
  //    initialRegion={{
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }}
  // />
  //     </View>

  <Login/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    height:'100%',
    width:'100%'
  }
  
});
