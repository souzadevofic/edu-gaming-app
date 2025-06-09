import React from 'react';
import Inicio from '../pages/Inicio';
import Disciplina from '../pages/Disciplina';
import Historico from '../pages/Historico';
import Perfil from '../pages/Perfil'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();

  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#2aacc0",
          height: 50 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#eeeeee",
        tabBarInactiveBackgroundColor: "#2aacc0",
        headerStyle: {
          backgroundColor: "#2aacc0",
        },
        headerTintColor: "#ffffff",
        headerTitleAlign: "center",

        tabBarButton: (props) => (
          <Pressable 
            {...props} 
            android_ripple={{ color: "transparent" }} 
          />
        ),

        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Disciplina") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Histórico") { 
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }
          
          return (
            <Ionicons 
              name={iconName} 
              size={25} 
              color={color} 
            />
          );
        },
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={Inicio} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen name="Disciplina" component={Disciplina} />
      <Tab.Screen name="Histórico" component={Historico} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
