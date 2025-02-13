
import { Text, View, StyleSheet, TouchableOpacity,TextInput, Image, BackHandler, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, NativeViewGestureHandler, ScrollView } from 'react-native-gesture-handler';
import useAuth from '@/hooks/useAuth';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';



function PlanEvent() {

    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        const backAction = () => {
            if (user) {
                Alert.alert("Exit App", "Do you want to exit the app?", [
                    { text: "Cancel", style: "cancel" },
                    { text: "Exit", onPress: () => BackHandler.exitApp() }
                ]);
                return true; 
            }
            return false; 
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, [user]);
    return (
            <GestureHandlerRootView>
                <View style={styles.titleContainer}>
                    <Text style = {styles.title}>Plan An Event</Text>
                </View>
                <ScrollView style = {styles.container}>
                    <View style = {styles.images}>
                        <View>
                            <TouchableOpacity onPress={() => (router.push('/components/funeralServices'))}>
                                <Image source={require('@/assets/images/funeral-flower.jpg')} style={styles.flower}/>
                                <View style={styles.overlay}>
                                    <Text style={styles.text}>Pre Plan a funeral</Text>
                                </View>
                            </TouchableOpacity>
                        
                        </View>
                        
                        <View>
                            <TouchableOpacity>
                            <Image source={require('@/assets/images/birthday.png')} style = {styles.birthday}/>
                            <View style={styles.overlay}>
                                <Text style={styles.text}>Plan a birthday party</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        
                        <View>
                            <TouchableOpacity>
                            <Image source={require('@/assets/images/family-reunion.jpeg')} style = {styles.reunion} />
                            <View style={styles.overlay}>
                                <Text style={styles.text}>Plan for a family reunion</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                        
                        <View style={styles.customizeBtn}>
                            <TouchableOpacity style={styles.customizeCont} >
                                <Text style={styles.customize}>Customize your new event</Text>

                            </TouchableOpacity>
                        </View>
            
                </ScrollView>
                
            </GestureHandlerRootView>
                 
        
   
    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    title:{
        color:'#002D62',
        fontSize: 20,

    },

    titleContainer:{
        height:'15%',
        alignItems:'center',
        paddingTop:45, 
        justifyContent: 'center',
    },

    images:{
        backgroundColor:'#D3DAE3',
        padding:10,
        paddingTop:20,
        position:'relative',
        width:'100%',
    },

    flower:{
        height: 200,
        width:'100%',
        borderRadius:7,
        marginBottom:10,
        resizeMode:'cover',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 10,
        justifyContent: 'center', 
        borderRadius: 10, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop:130,
    
      },

      text: {
        color: 'white',
        fontSize: 18, 
        textAlign: 'center', 
      },

    birthday:{
        height: 200,
        backgroundPosition:'center',
        width:'100%',
        borderRadius:10,
        marginBottom:10,

    },

    reunion:{
        height: 200,
        backgroundPosition:'center',
        width:'100%',
        borderRadius:10,
        marginBottom:10,

    },

    customizeBtn:{
        backgroundColor: '#002d62',
        width: 340,
        height: 65,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginTop: 20, 
        padding:20,
        marginLeft:10,
        marginBottom:20,

    },

    customize:{
        color: "#fff",
        fontSize: 18,
    },

    customizeCont:{
        textAlign: 'center',
        height: '100%',
        justifyContent: 'center',

    },
})


export default PlanEvent;