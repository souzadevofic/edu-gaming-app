import { View, Text, StyleSheet } from 'react-native';
import TrophySvg from '../../../assets/img/TrophySVG';

export default function ContainerPontuacao({ pontuacao, posicao }) {
  return (
    <View style={styles.container}>
      <TrophySvg width={150} height={150} style={styles.trofeuImagem} />
      <Text style={styles.fontAzul}>PONTUAÇÃO</Text>
      <Text style={styles.fontPreta}>{pontuacao}</Text>
      <Text style={styles.fontAzul}>POSIÇÃO</Text>
      <Text style={styles.fontPreta}>Nº {posicao}</Text>
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
  trofeuImagem: {
    marginBottom: 20,
  },
  fontAzul: {
    color: "#2aacc0",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
  },
  fontPreta: {
    color: "#000",
    fontSize: 26,
    marginTop: 8,
    marginBottom: 8,
  },
});
