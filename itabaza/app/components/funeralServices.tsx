import { FontAwesome } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';




function FuneralServices() {

    const router = useRouter();
    return (
            <GestureHandlerRootView>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => (router.push('/components/eventPlan'))} style={styles.back} >
                        <FontAwesome name='chevron-left' size={20} color ='#002D62' />
                    </TouchableOpacity>
                    <Text style = {styles.title}>Funeral Services</Text>
                </View>
                <ScrollView style = {styles.container}>
                    <View style = {styles.images}>
                        <View style= {styles.serviceContainer}>
                            <TouchableOpacity onPress={() => (router.push('/components/cemetriesMap'))} style={styles.service}>
                                <Image source={require('@/assets/images/brown-cross.jpeg')} style={styles.serviceImage}/>
                                <View>
                                    <Text style={styles.serviceHeading}>Cemeteries</Text>
                                    <Text style = {styles.bookService}> Arrange for a cemetery and {'\n'} make everything easier for you</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style= {styles.serviceContainer}>
                            <TouchableOpacity style={styles.service}>
                                <Image source={require('@/assets/images/cam.jpeg')} style={styles.serviceImage}/>
                                <View>
                                    <Text style={styles.serviceHeading}>Photography</Text>
                                    <Text style = {styles.bookService}>Cherish your memories through {'\n'}exceptional photography</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style= {styles.serviceContainer}>
                            <TouchableOpacity style={styles.service}>
                                <Image source={require('@/assets/images/junction.jpeg')} style={styles.serviceImage}/>
                                <View>
                                    <Text style={styles.serviceHeading}>Logistics</Text>
                                    <Text style = {styles.bookService}>Focus on what matters most {'\n'}while we handle transportation</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style= {styles.serviceContainer}>
                            <TouchableOpacity style={styles.service}>
                                <Image source={require('@/assets/images/flower.jpg')} style={styles.serviceImage}/>
                                <View>
                                    <Text style={styles.serviceHeading}>Flowers</Text>
                                    <Text style = {styles.bookService}>Flowers delivered with care, so  {'\n'}you can focus on what matters.</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style= {styles.serviceContainer}>
                            <TouchableOpacity style={styles.service}>
                                <Image source={require('@/assets/images/coffin.jpeg')} style={styles.serviceImage}/>
                                <View>
                                    <Text style={styles.serviceHeading}>Coffins</Text>
                                    <Text style = {styles.bookService}>We’ve got the coffin purchase {'\n'}covered, just for you!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style= {styles.serviceContainer}>
                            <TouchableOpacity style={styles.service}>
                                <Image source={require('@/assets/images/paperwork.jpeg')} style={styles.serviceImage}/>
                                <View>
                                    <Text style={styles.serviceHeading}>Paperwork</Text>
                                    <Text style = {styles.bookService}>Guiding you through essential {'\n'}legal documents with no stress</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
            
                </ScrollView>
                
            </GestureHandlerRootView>
                 
        
   
    );

}

const styles = StyleSheet.create({

    serviceContainer:{
        marginBottom:7,

    },

    serviceHeading:{
        color:'#002D62',
        fontSize: 18,

    },

    bookService:{
        fontSize: 14,

    },

    container:{
        flex:1,
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
        backgroundColor:'#D3DAE3',
        padding:10,
        paddingTop:20,
        position:'relative',
        width:'100%',
    },

    service:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:7,
        padding:10,

    },

    serviceImage:{
        width:120,
        height: 90,
        borderRadius:6,
        marginRight:7,
    },


    // flower:{
    //     height: 200,
    //     width:'100%',
    //     borderRadius:7,
    //     marginBottom:10,
    //     resizeMode:'cover',
    // },

    // overlay: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 10,
    //     justifyContent: 'center', 
    //     borderRadius: 10, 
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     paddingTop:130,
    
    //   },

    //   text: {
    //     color: 'white',
    //     fontSize: 18, 
    //     textAlign: 'center', 
    //   },

    // birthday:{
    //     height: 200,
    //     backgroundPosition:'center',
    //     width:'100%',
    //     borderRadius:10,
    //     marginBottom:10,

    // },

    // reunion:{
    //     height: 200,
    //     backgroundPosition:'center',
    //     width:'100%',
    //     borderRadius:10,
    //     marginBottom:10,

    // },

    // customizeBtn:{
    //     backgroundColor: '#002d62',
    //     width: 340,
    //     height: 65,
    //     borderRadius: 10,
    //     display: 'flex',
    //     alignItems: 'center',
    //     marginTop: 20, 
    //     padding:20,
    //     marginLeft:10,
    //     marginBottom:20,

    // },

    // customize:{
    //     color: "#fff",
    //     fontSize: 18,
    // },

    // customizeCont:{
    //     textAlign: 'center',
    //     height: '100%',
    //     justifyContent: 'center',

    // },
})


export default FuneralServices;