import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderComTimer() {
  // Estado inicial: 10 minutos em segundos
  const [segundosRestantes, setSegundosRestantes] = useState(10 * 60);
  
  useEffect(() => {
    if (segundosRestantes <= 0) return;
    
    const intervalo = setInterval(() => {
      setSegundosRestantes(prevSegundos => {
        if (prevSegundos <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prevSegundos - 1;
      });
    }, 1000);
    
    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, [segundosRestantes]);
  
  // Função para formatar os segundos em minutos:segundos
  const formatarTempo = (totalSegundos) => {
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    
    // Adiciona zero à esquerda se for menor que 10
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
    
    return `${minutosFormatados}:${segundosFormatados}`;
  };
  
  // Verifica se o tempo restante é menor ou igual a 5 minutos (300 segundos)
  const estiloTemporizador = {
    ...styles.temporizadorTexto,
    color: segundosRestantes <= 300 ? '#FF756F' : '#2aacc0'
  };
  
  return (
    <View style={styles.temporizadorContainer}>
      <Text style={styles.labelTexto}>TEMPO:</Text>
      <Text style={estiloTemporizador}>{formatarTempo(segundosRestantes)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  temporizadorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 4,
    marginVertical: 4,
    alignSelf: 'flex-end',
    opacity: 0.7,
  },
  labelTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
    color: '#2aacc0',
  },
  temporizadorTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2aacc0',
  },
});