import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import mapMarker from '../../images/map-marker.png'

import styles from './styles'

const Home: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails')
  }

  function handleNavigateToSelectMapPosition() {
    navigation.navigate('SelectMapPosition')
  }

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -1.440758,
          longitude: -48.4600391,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -1.440758,
            longitude: -48.4600391,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.9,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Belém lar</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigateToSelectMapPosition}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;