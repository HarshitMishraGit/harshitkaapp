import { StatusBar } from 'expo-status-bar';
import { Component, useRef, useState, useEffect } from 'react';
import { AppRegistry, ScrollView, Image } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const HomePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text >This is Home Page</Text>
            <View style={[styles.buttonView,styles.my2]}>
            <Button  title='Stack Navigation Example' color={'red'} onPress={() => {
                navigation.navigate('stacknavigatorcomp')
                }} />
                <Text ></Text>
            <Button  title='Bottom Tab Navigation Example' color={'blue'} onPress={() => {
                navigation.navigate('BottomTabnavigation')
                }} />
                <Text ></Text>
                
            <Button  title='Material Bottom Tab Navigation Example' color={'blue'} onPress={() => {
                navigation.navigate('materialbottomtabnav')
            } } />
                <Text ></Text>
                
            <Button  title='Material Top Tab Navigation Example' color={'green'} onPress={() => {
                navigation.navigate('materialtoptabnav')
            } } />
                <Text ></Text>
                
            <Button  title='Drawer Navigation Example' color={'green'} onPress={() => {
                navigation.navigate('Drawernav')
            } } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 5,
        flex: 1,
        // flexDirection
        // justifyContent:'space-between'
    },
    buttonView: {
        // flex: 1,
        // justifyContent: 'space-evenly',
        height: 200,
    },
    my2:{
        marginTop:20
    }
})

export default HomePage;
