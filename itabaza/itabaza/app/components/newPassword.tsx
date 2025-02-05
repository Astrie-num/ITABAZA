import { Text, View, StyleSheet, TouchableOpacity,TextInput, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';



function NewPassword () {
    
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

     async function handleSubmit() {
        if (!formData.password || !formData.confirmPassword) {
          Alert.alert('Error', 'Please fill in all fields');
          return;
        }
      
        if (formData.password.length < 6) {
          Alert.alert('Error', 'Password must be at least 6 characters long');
          return;
        }
      
        if (formData.password !== formData.confirmPassword) {
          Alert.alert('Error', 'Passwords do not match');
          return;
        }
      
        try {
            const response = await fetch('https://api-endpoint.com/reset-password', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  password: formData.password,
                  confirmPassword: formData.confirmPassword
                }),
              });
          
              const data = await response.json();
          
              if (!response.ok) {
                throw new Error(data.message || 'Failed to reset password');
              }
          
            Alert.alert('Success', 'Password reset successfully');
            router.push('/components/SignIn');
        } catch (error) {
          Alert.alert('Error', 'Something went wrong. Please try again.');
        }
      }
      
    
    const router = useRouter()

    function handleChange(field:string, value:string) {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => (router.push('/components/Forgot'))} style={styles.back} >
                <FontAwesome name='chevron-left' color ='#002D62' size={25} />
                </TouchableOpacity>
            </View>
            <View style = {styles.container}>
                <Text style= {styles.title}>Reset Password</Text>
                <Text style={styles.description}>Please reset your password</Text>
            </View>
            <View style={styles.form}>
            <View style = {styles.inputField}>
                <FontAwesome name="lock" size={20} style = {styles.icon}/>
                <TextInput placeholder='Your Password' secureTextEntry={true} style = {styles.textInput} value={formData.password}
                      onChangeText={(text) => handleChange('password', text)} />
                <FontAwesome name = "eye-slash" size={20} style={styles.eyeIcon1}/>
              </View>

              <View style = {styles.inputField}>
                <FontAwesome name="lock" size={20} style = {styles.icon}/>
                <TextInput placeholder='Confirm Password' secureTextEntry={true} style = {styles.textInput} value={confirmPassword}
                      onChangeText={(text) => setConfirmPassword(text)}/>
                <FontAwesome name="eye-slash" size={20} style={styles.eyeIcon2}/>
              </View>
            </View>
            <View style={styles.sendBtn}>
              <TouchableOpacity onPress={handleSubmit} style={styles.sendCont} >
                  <Text style={styles.send}>RESET</Text>

              </TouchableOpacity>
              <FontAwesome name='arrow-right' size={15} style={styles.arrow} />
          </View>
        </View>
)
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        width:'99%',
       
    },


    title:{
        color:'#002D62',
        fontSize: 22,
        marginTop:30,
        marginBottom:10,
    },

    description:{
        marginBottom:20,

    },

    back:{
        marginTop:40,
      },


    form: {
        width: '100%',
        // marginTop: 6,
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
    
    sendBtn: {
        backgroundColor: '#002d62',
        width: 271,
        height: 58,
        borderRadius: 12,
        display: 'flex',
        marginLeft:30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    arrow: {
        color: '#fff',
        backgroundColor: "#3C39A3",
        height:30,
        width: 30,
        padding:7.5,
        borderRadius: 20,
        
    },
    send: {
        color: "#fff",
        fontSize: 18,
        marginLeft:95
    },
    sendCont: {
        textAlign: 'center',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
   

});

export default NewPassword;