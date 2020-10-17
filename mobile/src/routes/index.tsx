import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';
import SelectRegion from '../pages/SelectRegion';
import Home from '../pages/Home';
import Success from '../pages/Success';
import OrphanageDetails from '../pages/OrphanageDetails';
import SelectMapPosition from '../pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from '../pages/CreateOrphanages/OrphanageData';
import Header from '../components/Header';


const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: "#f2f3f5" } 
        }}
      >
        <Screen 
          name="Onboarding" 
          component={Onboarding} 
        />

        <Screen 
          name="SelectRegion" 
          component={SelectRegion} 
        />

        <Screen 
          name="Home" 
          component={Home} 
        />
        
        <Screen 
          name="Success" 
          component={Success}
          options={{
            headerShown: false
          }} 
        />

        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }} 
        />
        <Screen 
          name="OrphanageData" 
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />

        
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;