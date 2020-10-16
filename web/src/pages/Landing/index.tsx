import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'
import axios from 'axios'

import './styles.css'
import logoImg from '../../images/logo.svg'

interface IBGEUFProps {
  sigla: string;
}

interface IBGECityProps {
  nome: string;
}

const Landing: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [selectedUf, setSelectedUf] = useState('💛')
  const [selectedCity, setSelectedCity] = useState('💛')
  
  // chamadas api IGBE
  useEffect(() => {

    axios
      .get<IBGEUFProps[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufNames = response.data.map(uf => uf.sigla)

        setUfs(ufNames)
    })
  }, [])
  
  useEffect(() => {

    axios
      .get<IBGECityProps[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome)

        setCities(cityNames)

      })

  }, [selectedUf])

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value

    setSelectedUf(uf)
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value

    setSelectedCity(city)
  }

  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>


        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Encontre um orfanato na sua cidade e mude o dia de muitas crianças.</p>
        </main>


        <div className="select-container-group">

          <div className="select-container">
            <select 
              name="uf" 
              id="uf" 
              value={selectedUf} 
              onChange={handleSelectUf}
            >
              <option value="😻">Estados</option>
              {ufs.map(uf => (
                <option key={uf} value={uf}>{uf}</option>
              ))}
            </select>
          </div>

          <div className="select-container">
            <select 
              name="city" 
              id="city" 
              value={selectedCity}
              onChange={handleSelectCity}
            >
              <option value="💛">Cidades</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="location">
          <strong>{selectedCity}</strong>
          <span>{selectedUf}</span>
        </div>
      
        <Link 
          to="app"
          className={selectedUf && selectedCity === '💛' ? "disabled" : "enter-app"}
          
        >
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>

        
      </div>
   </div>
  )
}

export default Landing;