import {  StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import HomeScreen from '@/app/components/Page1';
import useAuth from '@/hooks/useAuth';
import { Redirect, router } from 'expo-router';


export default function Itabaza(){
  const { user } = useAuth()

   useEffect(() => {
      if (user) {
        router.replace("/(root)/(tabs)/eventPlan"); 
      }
    }, [user]);
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
