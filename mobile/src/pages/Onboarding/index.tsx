import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import planetImg from '../../images/planet.png'
import styles from './styles'

const Onboarding: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToSelectRegion() {
    navigation.navigate('SelectRegion')
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={planetImg} />
      </View>

      <Text style={styles.title}>Leve {'\n'}felicidade{'\n'}para o{'\n'}mundo</Text>
      <Text style={styles.description}>Visite orfanatos e mude o{'\n'}dia de muitas crianças.</Text>

      <View style={styles.footer}>
        <RectButton onPress={handleNavigateToSelectRegion} style={styles.nextPageButton}>
          <Feather name="arrow-right" size={20} color="#15B6D6" />
        </RectButton>
      </View>
    </View>
  )
}

export default Onboarding;