import React from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notes from '../Notes';
import NewPage from '../NewPage';
const TopTab = createMaterialTopTabNavigator();
const MTTN = () => {
    return (
    <TopTab.Navigator>
            <TopTab.Screen name='Notes' component={Notes} options={{ title: "Notes" ,tabBarIcon:()=>{
                return <Image  source={require('../../assets/images/note.png')}  style={{height:25,width:40,borderRadius:5,alignSelf:'center'}} />
            }}} /> 
            <TopTab.Screen name='newpage' component={NewPage} options={{title:"New Page",tabBarIcon:()=>{
                return <Image source={require('../../assets/images/newpage.png')}  style={{height:25,width:40,borderRadius:5,alignSelf:'center'}} />
            }}}/>
    </TopTab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default MTTN;
