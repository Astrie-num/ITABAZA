import {  StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from '../components/Page1';


export default function Itabaza(){
  return( 
    <GestureHandlerRootView style = {styles.container}>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center'
  },
});
