import React from 'react'
import { Text, View,StyleSheet,Image, TouchableOpacity } from 'react-native'
import DotNavigation from './DotNavigation';
import { useRouter } from 'expo-router';

function Page3() {
  const router = useRouter();
  return (
      <View style={styles.container}>
          <Image source={require('@/assets/images/road.png')} style={styles.bgImage}/>
          <View style={styles.block}>
      <Text style={styles.title}>
        Paper Work Made Effortless
      </Text>
      <Text style={styles.description}>Itabaza simplifies post-death formalities, from registration to certificates.</Text>
      <View style={styles.dots}>
        <TouchableOpacity
          
          onPress={() => {
            router.push('/components/SignUp');
          }}
        >
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>

        <DotNavigation currentPosition={2}/>

        <TouchableOpacity  onPress={() => { router.push('/components/SignUp') }}>
          <Text style={styles.btnTextW}>Next</Text>

        </TouchableOpacity>

      </View>
    </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
  bgImage: {
      height: '71%',
      backgroundPosition:'center',
      
  },
  block: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#002D62',
      width: '100%',
      height: 240,
      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
      padding: 4,
      textAlign: 'center',

  },
  title: {
      fontSize: 22,
      color: 'white',
      marginTop: 25,
      paddingHorizontal: 30
  },
  description: {
      textAlign: 'center',
      marginTop: 12,
      color: 'white',
      opacity: 0.7,
      paddingHorizontal:20
  },
  dots: {
      display: "flex",
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      marginTop:65,
  },
  btn: {
      color: 'white',
      fontSize: 24,
  },
  btnText: {
      color: "white",
      opacity: 0.5,
      fontSize: 18,
  },
  btnTextW: {
      color: "white",
      fontSize: 18,
  }
});
export default Page3;