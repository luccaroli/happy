import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import * as Location from 'expo-location';

import api from '../../services/api';

import mapMarker from '../../images/map-marker.png'

import styles from './styles'

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number
}

const Home: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])

  const navigation = useNavigation()

  useEffect(() => {
    async function loandPosition() {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        Alert.alert('Oooopa', 'precisamos da sua permisão para obter a localização')
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const {latitude, longitude} = location.coords

      setInitialPosition([
        latitude,
        longitude
      ])
    }
    
    loandPosition()
  }, [])

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  })

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', { id })
  }

  function handleNavigateToSelectMapPosition() {
    navigation.navigate('SelectMapPosition')
  }

  return (
    <View style={styles.container}>
      { initialPosition[0] !== 0 && (
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map} 
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          {orphanages.map(orphanage => {
            return (
              <Marker 
                key={orphanage.id}
                icon={mapMarker}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude:orphanage.longitude,
                }}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.9,
                }}
              >
                <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{orphanage.name}</Text>
                  </View>
                </Callout>
            </Marker>
            )
          })}
        </MapView>
      ) }

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} Orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigateToSelectMapPosition}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;