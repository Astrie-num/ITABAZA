import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '@/hooks/useAuth';

function Verification() {
    const router = useRouter();
    const { user , verifyOtp } = useAuth();
    const [email, setEmail] = useState(''); // state to store email
    const [otp, setOtp] = useState('');

    useEffect(() => {
        const getEmailFromStorage = async () => {
            try {
                const storedEmail = await AsyncStorage.getItem('userEmail');
                if (storedEmail) {
                    setEmail(storedEmail); // Set email to state
                }
            } catch (e) {
                console.error('Failed to load email from AsyncStorage:', e);
            }
        };

        getEmailFromStorage();
    }, []);

    interface ResponseData {
        success: boolean;
        message: string;
    }

    interface AxiosError {
        response?: {
          status: number;
          data: any;
        };
        message: string;
        config: any;
        code?: string;
      }

      function isAxiosError(error: any): error is AxiosError {
        return error.isAxiosError === true;
      }
      
    const handleVerifyOtp = async () => {
        try {
            console.log("email: ",user?.email)
            if (user?.email) {
                verifyOtp(user.email, otp);
            } else {
                console.error('User email is undefined');
                alert('User email is undefined. Please try again.');
            }
        } catch (error:unknown) {
            if (isAxiosError(error)) {
                const axiosError = error as AxiosError; // Type assertion to AxiosError

                if (axiosError.response) {
                    // Handle response error
                    console.error('Response Error:', axiosError.response.data);
                    console.error('Status Code:', axiosError.response.status);
                    alert(`Error: ${axiosError.response.data.message || 'Something went wrong. Please try again later.'}`); // Template literals
                } else {
                    // Handle request error (no response)
                    console.error('Request Error:', axiosError.message);
                    alert('No response from the server. Please check your connection.');
                }
            } else {
                // Handle unknown errors
                console.error('Unknown Error:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {router.push('/(auth)/sign-up')}} style={styles.back}>
                    <FontAwesome name='chevron-left' color='#002D62' size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Verification</Text>
                <Text style={styles.description}>We’ve sent you the verification code on {email}</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.codeInput}
                    value={otp}
                    onChangeText={(text) => setOtp(text)}
                    placeholder="Enter OTP"
                    keyboardType="numeric"
                    maxLength={6}
                />
            </View>
            <View style={styles.continueBtn}>
                <TouchableOpacity onPress={handleVerifyOtp} style={styles.continueCont}>
                    <Text style={styles.continue}>CONTINUE</Text>
                </TouchableOpacity>
                <FontAwesome name='arrow-right' size={15} style={styles.arrow} />
            </View>
            <View style={styles.resend}>
                <Text>Re-send code</Text>
                <Text style={{ color: '#002D62' }}> 0:20</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        width: '99%',
    },
    title: {
        color: '#002D62',
        fontSize: 22,
        marginTop: 30,
        marginBottom: 20,
    },
    back: {
        marginTop: 40,
    },
    description: {
        marginBottom: 20,
    },
    codeInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        paddingHorizontal: 10,
        fontSize: 18,
        width: '100%',
    },
    continueBtn: {
        backgroundColor: '#002d62',
        width: 271,
        height: 58,
        borderRadius: 12,
        display: 'flex',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    arrow: {
        color: '#fff',
        backgroundColor: "#3C39A3",
        height: 30,
        width: 30,
        padding: 7.5,
        borderRadius: 20,
    },
    continue: {
        color: "#fff",
        fontSize: 18,
        marginLeft: 95,
    },
    continueCont: {
        textAlign: 'center',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    resend: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 95,
    },
});

export default Verification;
