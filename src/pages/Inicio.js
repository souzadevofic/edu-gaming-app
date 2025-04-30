import React from 'react';
import HeaderInicio from '../components/HeaderInicio/HeaderInicio';

// Os componentes serão importados aqui e retonados dentro do return ex: <HeaderInicio/>
export default function Inicio() {
  return (
    <HeaderInicio   
      nomeUsuario="Maria Silva" 
      matricula="123456789" 
      nomeCurso="Análise e Desenvolvimento de Sistemas" />
  );
}
