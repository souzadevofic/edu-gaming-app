import React from 'react';
import Login from '../pages/Login';
import TabRoutes from '../routes/tabs'; 
import Atividade from "../pages/Atividade"; 
import Questao from "../pages/Questao";
import HeaderComTimer from '../components/HeaderComTimer/HeaderComTimer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Routes() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="HomeTabs" 
          component={TabRoutes} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Atividade"
          component={Atividade}
          options={{
            headerStyle: {
            backgroundColor: '#2aacc0',
          },
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
            title: 'Minhas Atividades',
            height: 80,
        }}
/>
        <Stack.Screen 
        name="Questao" 
        component={Questao}
        options={{ 
        header: () => <HeaderComTimer />
      }}
  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}