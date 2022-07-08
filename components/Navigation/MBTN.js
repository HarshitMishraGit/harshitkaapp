import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Notes from '../Notes';
import NewPage from '../NewPage';

const Tab = createMaterialBottomTabNavigator();
const MBTN = () => {
    return (
        <Tab.Navigator
            shifting={true}
            
        >
            <Tab.Screen name='Notes' component={Notes} options={{
                tabBarColor: "#7671de", tabBarIcon: () => {
                    return <Image source={require('../../assets/images/note.png')} style={{height:25,width:40,borderRadius:5}} resizeMode="contain"/>
            }}} />
            <Tab.Screen name='NewPage' component={NewPage} options={{
                tabBarColor: "#5ec2d6", tabBarIcon: () => {
                    return <Image source={require('../../assets/images/newpage.png')} style={{height:25,width:40,borderRadius:5}} resizeMode="contain"/>
            }}} />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default MBTN;
