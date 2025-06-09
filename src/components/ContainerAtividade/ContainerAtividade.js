import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ContainerAtividades() {
  const route = useRoute();
  const navigation = useNavigation();
  const { disciplina } = route.params;

  const atividades = [
    'Questões de HTML e CSS',
    'Questões de JavaScript',
    'Questões sobre Sintaxe',
  ];

  return (
    <View style={styles.container}>
      {atividades.map((a, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.button, i === 0 ]}
          onPress={() => {
            if (i === 0) {
              navigation.navigate('Questao', { atividade: a, disciplina });
            }
          }}
        >
          <Text style={styles.buttonText}>{a}</Text>
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
    padding: 18,
    marginVertical: 10,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});