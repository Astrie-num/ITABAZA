import { axios } from "@/lib/axios.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";



interface AuthContextType{
    user: User | null;
    loggingIn: boolean;
    registering: boolean;
    loggedIn: boolean;
    register: (
        user: Omit<
          User,
          "id" | "otp"
        > & {
            password?: string 
        }
    ) => void;
    login: (email: string, password: string) => void;
    logout?: () => void;
    verifyOtp: (email: string, otp: string) => void;
    forgotPassword: (email: string) => void;
    resetPassword: (token: string, newPassword: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children } : { children: React.ReactNode}) => {
     const [loggingIn, setLoggingIn] = useState(false);
     const [loggedIn , setLoggedIn] = useState(false);
     const [registering, setRegistering] = useState(false);
     const [loggingOut, setLogginOut] = useState(false);
     const [initialLoading , setInitialLoading] = useState(false);
     const [user, setUser] = useState<User | null>(null);


     const login = async(email: string, password: string) => {
        setLoggingIn(true)
         try{
            const { data } = await axios.post("/auth/login", { email, password});
            setUser(data.user);
            await AsyncStorage.setItem("token", data.token);
            setLoggedIn(true)
            router.push('/(root)/(tabs)/eventPlan')
         }catch(error: any){
            console.error("Login Failed: ", error?.message)
         }finally{
            setLoggingIn(false)
         }
    }


    const register = async( user: Omit<
        User,
        "id" | "otp" 
      > & {
        password?: string;
      }) => {
        setRegistering(true)
         try{
            const { data } = await axios.post("/auth/register", user);
            setUser(data.user);
            router.push("/(auth)/verification");
            return data;

         }catch(error: any){
            console.error("Signup failed: ", error?.message)
         }finally{
            setRegistering(false)
         }
      }

      const verifyOtp = async (email: string, otp: string) => {
        try {
          const { data } = await axios.post("/auth/verify-otp", { email, otp });
          if (data.success) {
            Alert.alert("Success", "Account verified successfully!");
            
          }
          router.push('/(auth)/sign-in');
        } catch (error: any) {
          console.log("Error while verifying the OTP: ", error?.message);
          Alert.alert("Error", "Invalid verification code");
        }
      };


      const forgotPassword = async(email: string) => {
        try{
            const { data } = await axios.post("/auth/forgot-password", { email })
            return data;
        }catch(error: any){
            console.error("Forgot password failed: ", error?.message)
        }
      }

      const resetPassword = async(token: string , newPassword: string) => {
         try{
            const { data } = await axios.post("/auth/reset-password", { token, newPassword})
            return data;
         }catch(error: any){
            console.error("Reset Password failed: ", error?.message);
         }
      }


      return <AuthContext.Provider
       value={{
         user,
         loggingIn,
         registering,
         loggedIn,
         login,
         register,
         verifyOtp,
         forgotPassword,
         resetPassword,
         
       }}
      >{children}</AuthContext.Provider>
}

export default function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }
  