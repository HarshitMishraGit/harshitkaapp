import { StatusBar } from 'expo-status-bar';
import { Component, useRef, useState, useEffect } from 'react';
import { AppRegistry, ScrollView, Image } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import Home from './components/Home';
// import Imagecomp from './components/Imagecomp';
import Notes from './components/Notes';
import { NavigationContainer } from '@react-navigation/native';;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPage from './components/NewPage';
import Home from './components/Home';
import HomePage from './components/HomePage';
import BottomTabNavigation from './components/Navigation/BottomTabNavigation';
import SN from './components/Navigation/SN';
import MBTN from './components/Navigation/MBTN';
import MTTN from './components/Navigation/MTTN';
import Drawernav from './components/Navigation/Drawernav';

// import StackNavigationcomp from './components/Navigation/stackNavigationcomp';
//  We are using diffent Type of Navigations in the same app 
const stackNavigation = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName='HomePage'>
        <stackNavigation.Screen name='Home' component={HomePage} options={{ title: "Home Page " }} />
        <stackNavigation.Screen name='BottomTabnavigation' component={BottomTabNavigation} options={{ title: "Bottom Tab Navigation" }} />
        <stackNavigation.Screen name='stacknavigatorcomp' component={SN} options={{ title: "Stack Navigation" }} />
        <stackNavigation.Screen name='materialbottomtabnav' component={MBTN} options={{title:"Material Bottom tab Navigation"}} />
        <stackNavigation.Screen name='materialtoptabnav' component={MTTN} options={{title:"Material Top tab Navigation"}} />
        <stackNavigation.Screen name='Drawernav' component={Drawernav} options={{title:"Drawer Navigation",headerShown:false}} />
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
