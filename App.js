/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ActivityIndicator,ScrollView} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
   super(props);
   this.state ={ isLoading: true}
 }
  componentDidMount(){
   return fetch('https://api.github.com/users')
     .then((response) => response.json())
     .then((responseJson) => {
         var dizi=[];
       for(let e in responseJson){dizi.push(<Text key={e} style={styles.ilk}>{responseJson[e].login} -  <Text style={styles.son}>{responseJson[e].repos_url}</Text></Text>)}
       this.setState({bilgi:dizi,isLoading:false})
     })
     .catch((error) =>{
       console.error(error);
     });
 }
  render() {
    if(this.state.isLoading){
     return(
       <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
       </View>
     )
   }

   return(
     <View style={{flex: 1, paddingTop:20}}>
     <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.state.bilgi}
     </ScrollView>

     </View>
   );
 }
}
const styles = StyleSheet.create({
  ilk:{
    color:'red',
    },
  son:{color:'blue',
    },
  contentContainer: {
    paddingVertical: 20,
  },
});
