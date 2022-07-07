import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const NewPage = (props) => {
    // console.log("This is the props which are recieving", props);
    return (
        <View>
            <Text>This is new Page</Text>
            {/* <Text>This is The recived Param: { props.route.params.name}</Text> */}

        </View>
    );
}

const styles = StyleSheet.create({})

export default NewPage;
