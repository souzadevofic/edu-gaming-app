import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ContainerQuestao() {
  const route = useRoute();
  const { atividade, disciplina } = route.params;

  const questoes = [
    {
      enunciado: "Qual das tags HTML é usada para criar um parágrafo?",
      alternativas: ["<div>", "<span>", "<p>", "<h1>", "<article>"],
      respostaCorreta: "<p>",
    },
    {
      enunciado: "Qual propriedade CSS é usada para mudar a cor do texto?",
      alternativas: ["font-style", "text-color", "color", "background-color", "font-family"],
      respostaCorreta: "color",
    },
    {
      enunciado: "O que é o React?",
      alternativas: ["Uma linguagem de programação", "Uma biblioteca JavaScript", "Um framework PHP", "Um banco de dados", "Uma ferramenta de automação"],
      respostaCorreta: "Uma biblioteca JavaScript",
    },
    {
      enunciado: "O que é o JSX no React?",
      alternativas: ["Um tipo de estado", "Um tipo de componente", "Uma extensão de sintaxe para JavaScript", "Um serviço de API", "Um tipo de biblioteca"],
      respostaCorreta: "Uma extensão de sintaxe para JavaScript",
    },
    {
      enunciado: "Qual comando no Git é usado para adicionar arquivos ao stage?",
      alternativas: ["git pull", "git add", "git commit", "git push", "git reset"],
      respostaCorreta: "git add",
    }
  ];

  const letras = ['A', 'B', 'C', 'D', 'E'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Disciplina: {disciplina}</Text>
      <Text style={styles.subHeader}>Atividade: {atividade}</Text>

      {questoes.map((questao, index) => (
        <View key={index} style={styles.questionBox}>
          <Text style={styles.question}>
            {index + 1}. {questao.enunciado}
          </Text>

          {questao.alternativas.map((alt, i) => (
            <TouchableOpacity key={i} style={styles.option}>
              <Text style={styles.optionText}>
                {letras[i]}) {alt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2aacc0',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  questionBox: {
    backgroundColor: '#f0f8f9',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  option: {
    backgroundColor: '#2aacc0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  optionText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
