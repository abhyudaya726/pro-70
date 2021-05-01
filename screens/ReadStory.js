import * as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class ReadStory extends React.Component{
  render(){
    return(
      <View style={{marginTop:200}}>
          <TouchableOpacity>
              <Text>Read Story</Text>
          </TouchableOpacity>
      </View>
    )
  }
}