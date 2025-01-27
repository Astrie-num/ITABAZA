import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.9403, // Example coordinates (Kigali)
          longitude: 29.8739,
          latitudeDelta: 0.05, // Zoom level
          longitudeDelta: 0.05,
        }}
      >
        {/* Example Marker */}
        <Marker
          coordinate={{ latitude: -1.9403, longitude: 29.8739 }}
          title="Kigali"
          description="Capital city of Rwanda"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
