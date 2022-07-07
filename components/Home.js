import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Imagecomp from './Imagecomp';

const Home = (props) => {
  return (
    <View style={styles.comp}>
          <Text style={styles.text}>{props.data}</Text>
          <Imagecomp/>
    </View>
  );
}

const styles = StyleSheet.create({
    comp: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-around",
    margin: 10,
    padding:20,
        borderWidth: 2,
    
    backgroundColor: "#f59314",
        borderRadius: 10,
    borderColor:"orange",
  width:380
    
    },
    text: {
        color: "brown",
        fontSize: 20,
        fontWeight:"bold"
        
    }
})

export default Home;
