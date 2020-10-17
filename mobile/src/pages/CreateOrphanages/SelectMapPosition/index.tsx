import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import mapMarkerImg from '../../../images/map-marker.png';

import styles from './styles'

export default function SelectMapPosition() {
  const navigation = useNavigation()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])

  useEffect(() => {
    async function loandPosition() {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        alert('Oooopa, precisamos da sua permisão para obter a localização')
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

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate) 
  }

  return (
    <View style={styles.container}>
     { initialPosition[0] !== 0 && (
        <MapView 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          style={styles.mapStyle}
          onPress={handleSelectMapPosition}
        >
        { position.latitude !== 0 && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        ) }
      </MapView>
     ) }

     { position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
     )}
    </View>
  )
}

