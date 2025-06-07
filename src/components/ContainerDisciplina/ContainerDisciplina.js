import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ContainerDisciplina() {
  const navigation = useNavigation();

  const disciplinas = [
    'HTML, CSS e JavaScript',
    'Dispositivos Android',
    'Big Data',
    'Metodologias Ágeis com Scrum',
    'Engenharia de Software',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que vamos aprender hoje?</Text>
      {disciplinas.map((d, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.button, i === 0]}
          onPress={() => {
            if (i === 0) {
              navigation.navigate('Atividade', { disciplina: d });
            }
          }}
        >
          <Text style={styles.buttonText}>{d}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2aacc0',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
