import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default function ContainerPontuacao({pontuacao, posicao}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/trophy.png')}
        style={styles.trophyImage}
        resizeMode="contain"
      />
      <Text style={styles.fontLarge}>PONTUAÇÃO</Text>
      <Text style={styles.font}>{pontuacao}</Text>
      <Text style={styles.fontLarge}>POSIÇÃO</Text>
      <Text style={styles.font}>Nº {posicao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 20,
  },
  trophyImage: {
    width: 200,
    marginBottom: 20,
  },
  fontLarge: {
    color: "#2aacc0",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
  },
  font: {
    color: "#000",
    fontSize: 26,
    marginTop: 8,
    marginBottom: 8,
  },
});