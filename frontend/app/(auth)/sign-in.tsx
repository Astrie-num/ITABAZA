import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, BackHandler, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
import useAuth from '@/hooks/useAuth';
import { StackActions, useFocusEffect } from '@react-navigation/native';


function SignIn() {
    const { login, user } = useAuth()
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const router= useRouter();

    interface SignInResponse {
        success: boolean;
        message: string;
    }
    const handleSubmit = async () => {
        if (!formData.email || !formData.password) {
            alert("Please fill in all fields.");
            return;
        }
        try {
            await login(formData.email, formData.password)
        } catch (error) {
            console.error("Sign-up error:", error);
            alert("Sign-up failed. Please try again.");
        }
    };
    
    function handleChange(field : 'email'| 'password', value:string) {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    const toggleSwitch = () => {
        setRememberMe((previousState) => !previousState);
    };

     useEffect(() => {
        if (user) {
            console.log("Here is the user: ", user)
            router.replace("/(root)/(tabs)/eventPlan");
        }
      }, [user]);

    return (
        <View style={styles.container}>
            {/* Logo and App Name */}
            <View style={styles.logoContainer}>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.logoTxt}>Itabaza</Text>
            </View>

            {/* Form Section */}
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputField}>
                    <FontAwesome name='envelope-o' size={18} style={styles.icon} />
                    <TextInput placeholder='mugabo@email.com' style={styles.textInput} value={formData.email}
                        onChangeText={(text) => handleChange('email', text)} />
                </View>
                <View style={styles.inputField}>
                    <FontAwesome name='lock' size={27} style={styles.icon} />
                    <TextInput placeholder='Your password' secureTextEntry={true} style={styles.textInput} value={formData.password}
                        onChangeText={(text) => handleChange('password', text)} />
                </View>
                <View style= {styles.links}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Remember me</Text>
                </View>
                <TouchableOpacity onPress={() => (router.push('/(auth)/forgot-password'))} style={styles.labelContainer}>
                    <Text style={styles.label}>Forgot Password?</Text>
                </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity
                        style={[
                            styles.customTrack,
                            { backgroundColor: rememberMe ? '#002D62' : '#E4DFDF' },
                        ]}
                        onPress={toggleSwitch}
                    >
                        <View
                            style={[
                                styles.customThumb,
                                {
                                    backgroundColor: rememberMe ? '#fff' : '#fff',
                                    alignSelf: rememberMe ? 'flex-end' : 'flex-start',
                                },
                            ]}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.loginBtn}>
                <TouchableOpacity onPress={handleSubmit} style={styles.loginCont} >
                    <Text style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
                <FontAwesome name='chevron-right' color ='#002D62' size={15} style={styles.arrow} />
            </View>
            <View style={styles.other}>
                <Text>OR</Text>
                <View style={styles.google}>
                    <Image source={require('@/assets/images/google.png')}/>
                    <Text style={styles.googlelogin}>Login with Google</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{router.push('/(auth)/sign-up')}} style={{marginBottom:15}}>
                <Text style={{color:'#120D26'}}>Don't have an account? <Text style={{color:'#002D62'}}>Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
       
    },

    links:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    logo: {
        width: 74,
        height: 77,
    },
    logoTxt: {
        fontSize: 28,
        color: '#002d62',
        textAlign: 'center',
        marginTop: 8,
    },
    form: {
        width: '100%',
        marginTop: 20,
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
        fontSize: 13,
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
    loginBtn: {
        backgroundColor: '#002d62',
        width: 271,
        height: 58,
        borderRadius: 12,
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
    login: {
        color: "#fff",
        fontSize: 18,
        marginLeft:95
    },
    loginCont: {
        textAlign: 'center',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    other:{
        marginTop:20,
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
    googlelogin:{
        marginLeft:10,
        fontSize:16,
        color:'#120D26',
    },
});


export default SignIn;
