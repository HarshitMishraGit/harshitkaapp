import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from '../Notes';
import NewPage from '../NewPage';

const stackNavigationcomp = createNativeStackNavigator();
const SN = () => {
  return (
    <stackNavigationcomp.Navigator initialRouteName='Notes'>
    <stackNavigationcomp.Screen name='Notes' component={Notes} options={{title:"My notes "}} />
    <stackNavigationcomp.Screen name='NewPage' component={NewPage} options={{title:"New Page"}} />
  </stackNavigationcomp.Navigator>

  );
}

const styles = StyleSheet.create({})

export default SN;
