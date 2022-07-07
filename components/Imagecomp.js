import React from 'react';
import {View, StyleSheet,Image, Text} from 'react-native';

const Imagecomp = () => {
    return (
        <View style={ styles.comp}>
            {/* <Image source={require('../assets/images/ironman.jpg')} style={styles.img}></Image> */}
            <Text>This is text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    comp: {
        // flex: 1,
        // alignItems: "center",
        // height:1000,
        // marginBottom:0
    },
    img: {
        
        width:90,
        resizeMode:"contains"
    }
})

export default Imagecomp;
