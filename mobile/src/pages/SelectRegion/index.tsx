import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

import kidsImg from '../../images/kids.png'
import styles from './styles';

interface IBGEUFProps {
  sigla: string
}

interface IBGECityProps {
  nome: string
}

const SelectRegion: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [selectedUf, setSelectedUf] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  const navigation = useNavigation()

  useEffect(() => {
    axios
      .get<IBGEUFProps[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufNames = response.data.map(uf => uf.sigla)
        setUfs(ufNames)
      })
  }, [])

  useEffect(()=>{
    if(selectedUf === '0'){
        return
    }
    axios
      .get<IBGECityProps[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response =>{
          const cityNames = response.data.map(city=>city.nome)

          setCities(cityNames)
      })
    
  },[selectedUf])


  function handleNavigationToHome() {
    navigation.navigate('Home', {
      selectedUf,
      selectedCity
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={kidsImg} />
      </View>

      <Text style={styles.description}>Escolha um{'\n'}orfanato no mapa{'\n'}e faça uma visita</Text>

      <View style={styles.footer}>
        <RNPickerSelect
          placeholder={{ label: 'Seu estado' }}
          style={pickerSelectStyles}
          value={selectedUf}
          onValueChange={(value) => setSelectedUf(value)}
          items={ufs.map(uf=>{
            return {label: String(uf), value: String(uf), key:String(uf)}
          })}

        />

        <RNPickerSelect
          placeholder={{ label: 'Sua cidade' }}
          style={pickerSelectStyles}
          value={selectedCity}
          onValueChange={(value) => setSelectedCity(value)}
          items={cities.map(cities=>{
            return {label: String(cities), value: String(cities), key:String(cities)}
          })}
        />

        {selectedUf && selectedCity !== '0' ? (
          <TouchableOpacity style={styles.button} onPress={handleNavigationToHome}>
            <View style={styles.buttonIcon}>
              <Text>
                <Feather name="arrow-right" size={24} color="#8D734B" />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            disabled={true}
            style={styles.buttoDisbled} 
            onPress={handleNavigationToHome}>
              <View style={styles.buttonIconDisabled}>
                <Text>
                  <Feather name="arrow-right" size={24} color="#f5f5f5" />
                </Text>
              </View>
              <Text style={styles.buttonTextDisabled}>
                Entrar
              </Text>
        </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  }
})


export default SelectRegion;