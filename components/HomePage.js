import { StatusBar } from 'expo-status-bar';
import { Component, useRef, useState, useEffect } from 'react';
import { AppRegistry, ScrollView, Image } from 'react-native';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';

const HomePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is Home Page</Text>
            <View style={styles.buttonView}>
            <Button  title='Stack Navigation Example' color={'red'} onPress={() => {
                navigation.navigate('stacknavigatorcomp')
            } } />
            <Button  title='Bottom Tab Navigation Example' color={'blue'} onPress={() => {
                navigation.navigate('BottomTabnavigation')
            } } />
            <Button  title='Material Bottom Tab Navigation Example' color={'blue'} onPress={() => {
                navigation.navigate('BottomTabNavigation')
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
        // justifyContent:'space-between'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'space-evenly',
        height:200
    }
})

export default HomePage;
