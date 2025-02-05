import { FontAwesome } from '@expo/vector-icons';
import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { View,Text,StyleSheet, TouchableOpacity,} from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import {Image} from 'react-native';

function SignUp() {

  const [formData, setFormData] = useState({
      fullname:'',
      email: '',
      password: '',
  });
  const router= useRouter();

  const handleSubmit = async () => {
    try {
        const response = await fetch("https://api-url.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            // alert("Signup successful!");
            router.push("/components/verification");
        } else {
            alert(`Error: ${data.message}`);
        }

        if (formData.password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
    } catch (error) {
        console.error("Signup failed:", error);
    }
};

  function handleChange(field: 'email' | 'password' | 'fullName', value:string) {
      setFormData((prevData) => ({
          ...prevData,
          [field]: value,
      }));
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>

          <View style={styles.container}>
            <TouchableOpacity onPress={() => {router.push('/components/SignIn')}} style={styles.back} >
            <FontAwesome name='chevron-left' color ='#002D62' size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
              <Text style={styles.title}>Sign Up</Text>
              <View style={styles.inputField}>
                  <FontAwesome name='user' size={20} style={styles.icon} />
                  <TextInput placeholder='Full name' style={styles.textInput} value={formData.fullname}
                      onChangeText={(text) => handleChange('fullName', text)} />
              </View>
              <View style={styles.inputField}>
                  <FontAwesome name='envelope' size={17} style={styles.icon} />
                  <TextInput placeholder='mugabo@email.com' style={styles.textInput} value={formData.email}
                      onChangeText={(text) => handleChange('email', text)} />
              </View>
              <View style = {styles.inputField}>
                <FontAwesome name="lock" size={20} style = {styles.icon}/>
                <TextInput placeholder='Your Password' secureTextEntry={true} style = {styles.textInput} value={formData.password}
                      onChangeText={(text) => handleChange('password', text)} />
                <FontAwesome name = "eye-slash" size={20} style={styles.eyeIcon1}/>
              </View>

              <View style = {styles.inputField}>
                <FontAwesome name="lock" size={20} style = {styles.icon}/>
                <TextInput placeholder='Confirm Password' secureTextEntry={true} style = {styles.textInput} value={confirmPassword}
                      onChangeText={(text) =>  setConfirmPassword(text)} />
                <FontAwesome name="eye-slash" size={20} style={styles.eyeIcon2}/>
              </View>
          </View>
          <View style={styles.signUpBtn}>
              <TouchableOpacity onPress={handleSubmit} style={styles.signUpCont} >
                  <Text style={styles.signUp}>SIGN UP</Text>

              </TouchableOpacity>
              <FontAwesome name='arrow-right' size={15} style={styles.arrow} />
          </View>
          <View style={styles.other}>
              <Text>OR</Text>
              <View style={styles.google}>
                  <Image source={require('@/assets/images/google.png')} />
                  <Text style={styles.googleSignUp}>Continue with Google</Text>
              </View>
          </View>
          <TouchableOpacity onPress={()=>{router.push('/components/SignIn')}} style={{marginBottom:15, marginLeft:50}}>
              <Text style={{color:'#120D26'}}>Already have an account? <Text style={{color:'#002D62'}}>Login</Text></Text>
          </TouchableOpacity>
      </View>
      </GestureHandlerRootView>
  );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        paddingHorizontal: 5,
        width:'100%',
        // marginTop:0,
       
    },

    back:{
      marginTop:70,
      fontWeight:'light',
      // marginLeft:0,
    },
    form: {
        width: '100%',
    },
    title: {
        fontSize: 22,
        color: '#002d62',
        alignSelf: 'flex-start',
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 4,
    },
    icon: {
        color: '#807A7A',
        marginHorizontal: 10,
        height: 22,
        width: 22,
    },
    eyeIcon2:{
        marginLeft:100,
        color:'#807A7A',
    },

    eyeIcon1:{
        marginLeft:120,
        color:'#807A7A',
    },

    textInput: {
        fontSize: 14,
        color: '#747688',
    },
    toggleContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    labelContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: '#002d62',
    },
    customTrack: {
        width: 45,
        height: 25,
        borderRadius: 17,
        padding: 1,
        justifyContent: 'center',
    },
    customThumb: {
        width: 24,
        height: 24,
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    signUpBtn: {
        backgroundColor: '#002d62',
        width: 271,
        height: 58,
        borderRadius: 12,
        marginLeft:18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Ensure the content is centered in the button
        marginTop: 20, // Add margin to separate it from the form fields
    },
    arrow: {
        color: '#fff',
        backgroundColor: "#3C39A3",
        height:30,
        width: 30,
        padding:7.5,
        borderRadius: 20,
        
    },
    signUp: {
        color: "#fff",
        fontSize: 18,
        marginLeft:95,
        
    },
    signUpCont: {
        textAlign: 'center',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
   
    },
    other:{
        marginTop:30,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    google:{
        display:'flex',
        flexDirection:'row',
        width:273,
        height:56,
        marginTop:5,
        justifyContent:'center',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:"#EEEEEE",
        paddingTop:15,
        borderRadius:15
    },
    googleSignUp:{
        marginLeft:10,
        fontSize:16,
        color:'#120D26',
    },

  });
export default SignUp;