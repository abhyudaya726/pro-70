import * as React from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';

export default class WriteStory extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput 
            style={styles.inputBox}
            placeholder={"Story Tale"}/>
          </View>
          <View style={styles.inputView}>
            <TextInput 
            style={styles.inputBox}
            placeholder={"Author"}/>
          </View>
          <View style={styles.inputView}>
            <TextInput 
            style={styles.inputBox}
            placeholder={"Write Your Story"}/>
          </View>
          <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });