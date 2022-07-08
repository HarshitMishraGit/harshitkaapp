import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notes from '../Notes';
import NewPage from '../NewPage';

const Drawer = createDrawerNavigator();
const Drawernav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Notes' component={Notes} options={{title:"Notes"}}/>
            <Drawer.Screen name='newpage' component={NewPage} options={{title:"New Page"}}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Drawernav;
