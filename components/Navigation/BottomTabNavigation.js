import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notes from '../Notes';
import NewPage from '../NewPage';

const BottonTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
      
            <BottonTab.Navigator>
            <BottonTab.Screen name='BottomNotes' component={Notes} options={{
                title: "Notes", headerShown: false, tabBarIcon: () => {
                    return <Image source={require('../../assets/images/note.png')} style={{height:30,width:40,borderRadius:5}} resizeMode="contain"/>
            } }}/>
                {/* <BottonTab.Screen name='BottomNotes' component={Notes} options={{
                title: "Notes", headerShown: false}}/> */}
            <BottonTab.Screen name='BottomNewPage' component={NewPage} options={{
                title: "NewPage", headerShown: false,tabBarIcon: () => {
                    return <Image source={require('../../assets/images/newpage.png')} style={{height:30,width:40,borderRadius:5}} resizeMode="contain"/>
            }
            }} />
            </BottonTab.Navigator>            
        
    );
}

const styles = StyleSheet.create({})

export default BottomTabNavigation;
