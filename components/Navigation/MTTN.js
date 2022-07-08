import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notes from '../Notes';
import NewPage from '../NewPage';
const TopTab = createMaterialTopTabNavigator();
const MTTN = () => {
    return (
    <TopTab.Navigator>
            <TopTab.Screen name='Notes' component={Notes} options={{ title: "Notes" }} /> 
            <TopTab.Screen name='newpage' component={NewPage} options={{title:"New Page"}}/>
    </TopTab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default MTTN;
