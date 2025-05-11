import React from 'react';
import HeaderInicio from '../components/HeaderInicio/HeaderInicio';
import ContainerPontuacao from '../components/ContainerPontuacao/ContainerPontuacao';
import { View } from 'react-native';

// Os componentes serão importados aqui e retonados dentro do return ex: <HeaderInicio/>
export default function Inicio() {
  return (
    <View>
      <View>
        <HeaderInicio   
<<<<<<<<< Temporary merge branch 1
          nomeUsuario="Alisson Souza" 
=========
          nomeUsuario="Maria Silva" 
>>>>>>>>> Temporary merge branch 2
          matricula="123456789" 
          nomeCurso="Análise e Desenvolvimento de Sistemas" />
      </View>
      <View>
        <ContainerPontuacao
          pontuacao="10"
<<<<<<<<< Temporary merge branch 1
          posicao="1" />
=========
          posicao="1"/>
>>>>>>>>> Temporary merge branch 2
      </View>
    </View>
  );
}
