import { StyleSheet, View, Dimensions, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function MapScreen() {
  const [searchText, setSearchText] = useState<string>(''); 
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<{ name: string; address: string; image: any } | null>(null);

  const initialRegion = {
    latitude: -1.96148,
    longitude: 30.21834,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(initialRegion);
  const mapRef = useRef<MapView | null>(null);


  useFocusEffect(
    React.useCallback(() => {
      setRegion(initialRegion);
      if (mapRef.current) {
        mapRef.current.animateToRegion(initialRegion, 1000); 
      }
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => (router.push('/components/funeralServices'))} style={styles.back} >
              <FontAwesome name='chevron-left' size={20} color ='#002D62' />
          </TouchableOpacity>
          <Text style = {styles.title}>Cemeteries</Text>
      </View>
        
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search location..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
          <Marker 
          coordinate={{ latitude: -1.96148, longitude: 30.21834 }} 
          // pinColor={selectedLocation ? 'red' : 'green'}
          onPress={() =>
            setSelectedLocation({
              name: "Rusororo Cemetery",
              address: "Cemetery in Kigali, Rwanda \n26Q9+G96, Kabuga",
              image: require('@/assets/images/rusororo-cemetery.jpg'),
            })
          } 
          >
          </Marker>
          {/* Changed: Display the name of the place on the marker before clicking */}
         {/* {selectedLocation === null && ( */}
          <Text style={styles.markerTitle}>Rusororo Cemetery</Text>
            {/* )} */}
            
      </MapView>

      
       {selectedLocation && (
        <View style={styles.detailsContainer}>
          <Image source={selectedLocation.image} style={styles.image} />
          <View style ={styles.info}>
            <Text style={styles.addressTitle}>{selectedLocation.name}</Text>
            <Text style={styles.address}>{selectedLocation.address}</Text>
          </View>

           
           <TouchableOpacity style={styles.detailsButton} onPress={() => (router.push('/components/vendors'))}>
            <Text style={styles.detailsButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer:{
    height:'15%',
    alignItems:'center',
    paddingTop:30, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    width: '100%', 
    backgroundColor: 'white',
},

  title:{
    color:'#002D62',
    fontSize: 20,
    flex: 1,
    textAlign: 'center', 
    // marginBottom:90,

  },

  back:{
    marginRight: 10,

  },

  inputContainer:{
    position:'relative',

  },

  input: {
    position: 'absolute',
    top: 17,
    left: 20,
    right: 20,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  detailsContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexDirection:'row',
  },

  image: {
    width: '40%',
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
  },

  info:{
    marginLeft:10,

  },

  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002D62',
  },

  address: {
    fontSize: 14,
    color: '#555',
  },

  detailsButton: {
    position: 'absolute',
    bottom: -60,
    left: 50,
    right: 50,
    backgroundColor: '#002D62',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
  },


  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  markerTitle: {
    fontSize: 20,
    marginLeft:20,
    color: '#002D62',
  },

});
