import React from 'react';
import { View, StyleSheet, Text,SafeAreaView,Image } from 'react-native';
import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
           
            <View style={styles.topbanner}>
                <Image source={require('../../assets/images/ironman.jpg')} style={{height:150,width:'100%',borderRadius:5}} resizeMode="contain"/>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label='Notes'
                    icon={() => { 
                       return <Image source={require('../../assets/images/note.png')} style={{height:25,width:40,borderRadius:5}} resizeMode="contain"/>
                    }}
                    onPress={() => {
                        props.navigation.navigate('Notes')
                    }}
                />
                <DrawerItem
                    label='New Page'
                    icon={() => { 
                       return <Image source={require('../../assets/images/newpage.png')} style={{height:25,width:40,borderRadius:5}} resizeMode="contain"/>
                    }}
                    onPress={() => {
                        props.navigation.navigate('newpage')
                    }}
                />
          </DrawerContentScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topbanner: {
        width: "100%",
        height: 150,
        paddingTop:30
        // justifyContent: 'center',
        // alignContent:'center'
    }
})

export default DrawerContent;
