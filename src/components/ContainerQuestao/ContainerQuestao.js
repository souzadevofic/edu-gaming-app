import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import HeaderComTimer from '../HeaderComTimer/HeaderComTimer';
import BotaoFinalizar from '../BotaoFinalizar/BotaoFinalizar';

export default function ContainerQuestao({navigation}) {
  const route = useRoute();
  const { atividade, disciplina } = route.params;

  const questoes = [
    {
      enunciado: "Qual das tags HTML é usada para criar um parágrafo?",
      alternativas: ["<p>", "<div>", "<span>", "<h1>", "<body>"],
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
    <SafeAreaView style={styles.container}>
      {/* Área do timer fixo no topo */}
      <View style={styles.timerContainer}>
        <HeaderComTimer />
      </View>
      
      {/* Área de questões com rolagem */}
      <ScrollView style={styles.questionsContainer} contentContainerStyle={styles.questionsContent}>
        {questoes.map((questao, index) => (
          <View key={index} style={styles.questionBox}>
            <Text style={styles.question}>{index + 1}. {questao.enunciado}</Text>
            {questao.alternativas.map((alt, i) => (
              <TouchableOpacity key={i} style={styles.option}>
                <Text style={styles.optionText}>{letras[i]}) {alt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <BotaoFinalizar />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  timerContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  questionsContainer: {
    flex: 1,
  },
  questionsContent: {
    padding: 20,
    paddingBottom: 30,
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
    marginBottom: 5,
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