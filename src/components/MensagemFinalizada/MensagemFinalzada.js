import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function MensagemFinalizada({ navigation }) {

    const styles = StyleSheet.create({
        container_mensagem: {
            top: 280,
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 5
        },
        chapeu: {
            height: 100,
        },
        texto_mensagem: {
            fontWeight: "bold",
            fontSize: 18,
            color: "#000000"
        },
        botao_conclusao: {
            borderWidth: 1,
            borderColor: "#ffffff",
            backgroundColor: "#2aacc0",
            justifyContent: 'center',
            width: 120,
            fontWeight: 'bold',
            borderRadius: 8,
            height: 60,
            alignItems: 'center',
        },
        texto_botao_concluir: {
            fontWeight: "bold",
            fontSize: 18,
            color: "#ffffff"
        }
    })

    return(
        <View style={styles.container_mensagem}>
            <Text style={styles.texto_mensagem}>O Seu resultado foi</Text>
            <Text style={styles.texto_mensagem}>10 de 10</Text>
            <Text style={styles.texto_mensagem}>Parabéns pelo o seu empenho!!</Text>
            <Image 
                source={require('../../../assets/chapeu_conquista.png')}
                style={styles.chapeu}
                resizeMode="contain"
            />

            <TouchableOpacity
                style={styles.botao_conclusao}
                onPress={() => navigation.navigate("HomeTabs")}
                activeOpacity={0.8}
            >
                <Text style={styles.texto_botao_concluir}>Finalizar</Text>
            </TouchableOpacity>

        </View>
    );
}