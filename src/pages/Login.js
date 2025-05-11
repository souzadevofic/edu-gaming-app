import React from 'react';
import { View } from 'react-native';
import HeaderLogin from '../components/HeaderLogin/HeaderLogin';
import AcessoLogin from '../components/AcessoLogin/AcessoLogin';

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderLogin />
      <AcessoLogin navigation={navigation} /> 
    </View>
  );
}