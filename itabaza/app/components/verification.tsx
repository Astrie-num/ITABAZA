import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CodeInput from './codeInput';



function Verification() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {router.push('/components/SignUp')}} style={styles.back} >
                <FontAwesome name='chevron-left' color ='#002D62' size={25} />
                </TouchableOpacity>
            </View>
            <View style = {styles.container}>
                <Text style= {styles.title}>Verification</Text>
                <Text style={styles.description}>We’ve sent you the verification code on @uwas...gmail.com</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity >
                    <CodeInput currentPosition={0}/>
                </TouchableOpacity>
            </View>
            <View style={styles.continueBtn}>
              <TouchableOpacity onPress={()=>{router.push('/components/SignIn')}} style={styles.continueCont} >
                  <Text style={styles.continue}>CONTINUE</Text>

              </TouchableOpacity>
              <FontAwesome name='arrow-right' size={15} style={styles.arrow} />
          </View>
          <View style={styles.resend}>
            <Text>Re-send code</Text>
            <Text style = {{color: '#002D62'}}> 0:20</Text>
          </View>
        </View>
)
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        paddingHorizontal: 10,
        width:'99%',
       
    },


    title:{
        color:'#002D62',
        fontSize: 22,
        marginTop:30,
        marginBottom:20,
    },
    back:{
        marginTop:40,
        // marginRight:100,
        // marginBottom:4,
      },

    description:{
        marginBottom:20,

    },
    
    continueBtn: {
        backgroundColor: '#002d62',
        width: 271,
        height: 58,
        borderRadius: 12,
        display: 'flex',
        marginLeft:20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40, // Add margin to separate it from the form fields
    },
    arrow: {
        color: '#fff',
        backgroundColor: "#3C39A3",
        height:30,
        width: 30,
        padding:7.5,

        borderRadius: 20,
        
    },
    continue: {
        color: "#fff",
        fontSize: 18,
        marginLeft:95
    },
    continueCont: {
        textAlign: 'center',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    resend:{
        marginTop:20,
        flexDirection:'row',
        marginLeft:95,
    },

});


export default Verification;
