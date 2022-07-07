import { StatusBar } from 'expo-status-bar';
import { Component, useRef, useState, useEffect } from 'react';
import { AppRegistry, ScrollView, Image } from 'react-native';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
import Home from './Home'
// import Imagecomp from 'Imagecomp';
const Notes = ({navigation}) => {
    const [listOfPost, setlistOfPost] = useState(["one","two","three"]);
  const [value, setvalue] = useState('');
  const [showtext, setshowtext] = useState(false);
  const inputRef = useRef('')
  const [state, setstate] = useState('');
  // let list = ["one","two","three"];
  // useEffect(() => {
  // //  list.push("inputRef.current.value")
  // }, [showtext]);
  // const handlePress = () => {setvalue(prevstate=>prevstate==''?'Button Pressed':'')}
  const handlePress = () => {
    setshowtext(prevstate => !prevstate);
    // console.log(inputRef)
    // if (value == '') {
    //   setshowtext(prevstate=>!prevstate)
    // }
    listOfPost.push(value);
    // console.log("This is newlist",listOfPost)
    setlistOfPost(listOfPost);
  }
  const deleteHandeler = () => {
    setlistOfPost([])
    
    // console.log(listOfPost.length)
  }
    return (
        <View>
             <ScrollView >
      {/* <Image source={{uri:"https://blog.logrocket.com/wp-content/uploads/2019/07/browseroutput-300x230.png"}}></Image> */}
    <View style={styles.container}>
    <Text style={{marginTop:100}}></Text>
            <StatusBar style="auto" />
            <Button title='Got to next page' color={'black'} onPress={() => {
              navigation.navigate('NewPage', {
                name:"harshit"
              })
            }}></Button>
      <Text>This is my first React Native app!!</Text>
      <TextInput placeholder='Enter something' onChangeText={(value)=>setvalue(value)} 
      style={{width:200,borderWidth:1,paddingLeft:10,margin:10}}
      ></TextInput>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",width:150}}>
        <Button
          // styles={{marg:100}}
         onPress = {handlePress}
         title = "Output"
          color="red"
        
        />
        <Text style={{marginTop:2}}></Text>
        {/* <View style={{padding:20,backgroundColor:"orange",borderRadius:20}} accessibilityRole="button" onResponderMove={handlePress}><Text>Output</Text></View> */}
      <Button
        
         onPress = {deleteHandeler}
         title = "reset"
          color="red"
        // {...listOfPost.length==0?disabled:console.log("This is enable")}
        {...state}
          
    
      />
       </View>
      {/* {showtext && <Text style={{ width: 200, paddingLeft: 10, margin: 10 }}>Please enter</Text>} */}
        {listOfPost.map((item, key) => {
        return <Home data={item} key={key} />
      })
        
          }
       
     
    </View>
    </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#faf3d4',
      alignItems: 'center',
      // justifyContent: 'center',
      
    },
    Button: {
      padding: '5px'
    }
  });
export default Notes;
