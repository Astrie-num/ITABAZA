import { FontAwesome } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';




function Profile() {

    const router = useRouter();
    return (
            <GestureHandlerRootView>
                <View style={styles.titleContainer}>
                    <TouchableOpacity style={styles.back} >
                        <FontAwesome name='chevron-left' size={20} color ='#002D62' />
                    </TouchableOpacity>
                    <Text style = {styles.title}>Cemetry Vendors</Text>
                </View>
    
                <ScrollView style = {styles.container}>
                    <View style = {styles.images}>
                        <View>
                            <TouchableOpacity style={styles.vendorContainer}>
                                <Image source={require('@/assets/images/brown-cross.jpeg')} style={styles.vendorImage}/>
                                <View>
                                    <Text style={styles.vendorName}>ONE LOVE GROUP</Text>
                                    <Text style={styles.vendorInfo}> Provides professional burial and{'\n'} cemetery management in Kigali.</Text>
                                    <View style = {styles.buttons}>
                                    <TouchableOpacity>
                                        <Text style={styles.contact} >Contact</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.book}>Book Now</Text>
                                    </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.vendorContainer}>
                                <Image source={require('@/assets/images/maison-agapante.png')} style={styles.vendorImage}/>
                                <View>
                                    <Text style={styles.vendorName}>Twifatanye Funeral Services</Text>
                                    <Text style={styles.vendorInfo}>Provides coffins, flowers,{'\n'}and burial arrangements.</Text>
                                    <View style = {styles.buttons}>
                                    <TouchableOpacity>
                                        <Text style={styles.contact}>Contact</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.book}>Book Now</Text>
                                    </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.vendorContainer}>
                                <Image source={require('@/assets/images/maison-agapante.png')} style={styles.vendorImage}/>
                                <View>
                                    <Text style={styles.vendorName}>Kanombe Funeral Services</Text>
                                    <Text style={styles.vendorInfo}>Provides coffins, flowers,{'\n'}and burial arrangements.</Text>
                                    <View style = {styles.buttons}>
                                    <TouchableOpacity>
                                        <Text style={styles.contact}>Contact</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.book}>Book Now</Text>
                                    </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </GestureHandlerRootView>
        );
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#D3DAE3',
},
    title:{
        color:'#002D62',
        fontSize: 20,
        flex: 1,
        textAlign: 'center', 

    },

    titleContainer:{
        height:'15%',
        alignItems:'center',
        paddingTop:45, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20, 
        width: '100%', 
        backgroundColor: 'white',
    },

    back:{
        marginRight: 10,

    },

    images:{
        padding:10,
        paddingTop:20,
        width:'100%',
    },

    vendorImage:{
        width:100,
        height:100,
        borderRadius:6,
        marginTop:8,
    },

    vendorContainer:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
        paddingHorizontal: 10, 
        height:'15%',
        paddingVertical:10, 
        justifyContent: 'space-between',
        borderRadius:7,
        marginBottom:10,

    },

    buttons:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,

    },

    vendorName:{
        fontSize:16,
        color :'#002D62',
    },

    vendorInfo:{
        fontSize: 14,

    },

    contact:{
        backgroundColor:'#A3A6B8',
        color :'#002D62',
        padding:10,
        borderRadius:7,
        marginLeft:-12,

    },
    book:{
        backgroundColor:'#002D62',
        color :'#fff',
        padding:10,
        borderRadius:7,

    },
})

export default Profile;