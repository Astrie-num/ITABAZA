import { useRouter } from 'expo-router';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DotNavigation from './DotNavigation';



function HomeScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/candle.jpeg')} style={styles.bgImage} />
      <View style={styles.block}>
        <Text style={styles.title}>
          Making Goodbyes Easier to Bear
        </Text>
        <Text style={styles.description}>Itabaza helps you honor loved ones by coordinating stress-free funeral arrangements.</Text>
        <View style={styles.dots}>
          <TouchableOpacity
            
            onPress={() => {
              router.push('/components/SignUp');
            }}
          >
            <Text style={styles.btnText}>Skip</Text>
          </TouchableOpacity>

          <DotNavigation currentPosition={0}/>

          <TouchableOpacity  onPress={() => { router.push('/components/Page2') }}>
            <Text style={styles.btnTextW}>Next</Text>

          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
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
      fontSize: 20,
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

export default HomeScreen;


