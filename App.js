import { StatusBar } from 'expo-status-bar';
import { Component, useRef, useState, useEffect } from 'react';
import { AppRegistry, ScrollView, Image } from 'react-native';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
// import Home from './components/Home';
// import Imagecomp from './components/Imagecomp';
import Notes from './components/Notes';
import { NavigationContainer } from '@react-navigation/native';;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPage from './components/NewPage';

const stackNavigation = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName='Notes'>
        <stackNavigation.Screen name='Notes' component={Notes} options={{title:"My notes"}} />
        <stackNavigation.Screen name='NewPage' component={NewPage} options={{title:"New Page"}} />
      </stackNavigation.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3d4',
    alignItems: 'center',
    // justifyContent: 'center',
    
  },
  Button: {
    padding: '5px'
  }
});
