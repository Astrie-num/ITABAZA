import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { StackActions } from "@react-navigation/native";
import useAuth from '@/hooks/useAuth';

function SignUp() {
  const { register, user} = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (formData.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await register(formData);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleChange = (field: 'email' | 'password' | 'username', value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      router.replace("/(root)/(tabs)/eventPlan"); 
    }
  }, [user]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { router.push('/(auth)/sign-in'); }} style={styles.back}>
            <FontAwesome name='chevron-left' color='#002D62' size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>

          <KeyboardAvoidingView>
            <View style={styles.inputField}>
              <FontAwesome name='user' size={20} style={styles.icon} />
              <TextInput placeholder='Username' style={styles.textInput} value={formData.username || ''}
                onChangeText={(text) => handleChange('username', text)} />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.inputField}>
            <FontAwesome name='envelope' size={17} style={styles.icon} />
            <TextInput placeholder='mugabo@email.com' style={styles.textInput} value={formData.email}
              onChangeText={(text) => handleChange('email', text)} />
          </View>
          <View style={styles.inputField}>
            <FontAwesome name="lock" size={20} style={styles.icon} />
            <TextInput placeholder='Your Password' secureTextEntry={true} style={styles.textInput} value={formData.password}
              onChangeText={(text) => handleChange('password', text)} />
            <FontAwesome name="eye-slash" size={20} style={styles.eyeIcon1} />
          </View>

          <View style={styles.inputField}>
            <FontAwesome name="lock" size={20} style={styles.icon} />
            <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.textInput} value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)} />
            <FontAwesome name="eye-slash" size={20} style={styles.eyeIcon2} />
          </View>
        </View>
        <View style={styles.signUpBtn}>
          <TouchableOpacity onPress={handleSubmit} style={styles.signUpCont}>
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
        <TouchableOpacity onPress={() => { router.push('/(auth)/sign-in'); }} style={{ marginBottom: 15, marginLeft: 50 }}>
          <Text style={{ color: '#120D26' }}>Already have an account? <Text style={{ color: '#002D62' }}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    width: '100%',
  },
  back: {
    marginTop: 70,
  },
  form: {
    marginTop: 20,
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
  eyeIcon2: {
    marginLeft: 100,
    color: '#807A7A',
  },
  eyeIcon1: {
    marginLeft: 120,
    color: '#807A7A',
  },
  textInput: {
    fontSize: 14,
    color: '#747688',
  },
  signUpBtn: {
    backgroundColor: '#002d62',
    width: 271,
    height: 58,
    borderRadius: 12,
    marginLeft: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  arrow: {
    color: '#fff',
    backgroundColor: "#3C39A3",
    height: 30,
    width: 30,
    padding: 7.5,
    borderRadius: 20,
  },
  signUp: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 95,
  },
  signUpCont: {
    textAlign: 'center',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  other: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  google: {
    display: 'flex',
    flexDirection: 'row',
    width: 273,
    height: 56,
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#EEEEEE",
    paddingTop: 15,
    borderRadius: 15,
  },
  googleSignUp: {
    marginLeft: 10,
    fontSize: 16,
    color: '#120D26',
  },
});

export default SignUp;
