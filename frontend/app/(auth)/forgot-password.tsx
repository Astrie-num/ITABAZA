import { Text, View, StyleSheet, TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import axios from 'axios';



function Reset () {
    
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    interface ForgotResponse {
        success: boolean;
        message: string;
    }
    const handleSubmit = async () => {
        if (!formData.email.trim()) {
            alert("Please enter your email address.");
            return;
        }

        try{

            const apiUrl = "http://10.12.74.91:5000/api/auth/forgot-password";
            const response = await axios.post(apiUrl, {
                email:formData.email,
            })

            console.log("Password reset email sent to:", formData.email);

            const data = response.data as ForgotResponse;
            if (data.success) {
                // Redirect to the 'newPassword' page
                router.push('/(auth)/new-password');
            } else {
                alert("Failed to send password reset email. Please try again.");
            }
        } catch (error) {
            console.error("Error sending password reset request:", error);
            alert("An error occurred. Please try again later.");
        }
    };


    function handleChange(field:string, value:string) {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => (router.push('/(auth)/sign-up'))} style={styles.back} >
                <FontAwesome name='chevron-left' color ='#002D62' size={25} />
                </TouchableOpacity>
            </View>
            <View style = {styles.container}>
                <Text style= {styles.title}>Reset Password</Text>
                <Text style={styles.description}>Please enter your email address to request a password reset</Text>
            </View>
            <View style={styles.form}>
            <View style={styles.inputField}>
                    <FontAwesome name='envelope-o' size={20} style={styles.icon} />
                    <TextInput placeholder='mugabo@email.com' style={styles.textInput} value={formData.email}
                        onChangeText={(text) => handleChange('email', text)} />
                </View>
            </View>
            <View style={styles.sendBtn}>
                <TouchableOpacity onPress={handleSubmit} style={styles.sendCont} >
                    <Text style={styles.send}>SEND</Text>
                    <FontAwesome name='chevron-right' color ='#002D62' size={15} style={styles.arrow} />
                </TouchableOpacity> 
            </View>
        </View>
    </TouchableWithoutFeedback>
);

}


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
        marginTop: 10,
    },

    inputField: {
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
    },

    icon: {
        color: '#807A7A',
        marginHorizontal: 10,
        height: 22,
        width: 22,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, 
        marginLeft:25,
    },
    arrow: {
        color: '#fff',
        backgroundColor: "#3C39A3",
        height:30,
        width: 30,
        padding:7.5,
        borderRadius: 20,
        // marginTop:12,
        marginLeft: 40,
        
        
    },
    send: {
        color: "#fff",
        fontSize: 18,
        marginLeft:80,
        // marginTop:15,
    },
    sendCont: {
        textAlign: 'center',
        width: '80%',
        height: '100%',
        // justifyContent: 'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
   

});

export default Reset;