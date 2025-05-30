import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function BotaoFinalizar() {
    const navigation = useNavigation(); 

    const styles = StyleSheet.create({
        container_botao_finalizar:{
            alignItems: 'center',
            justifyContent: 'center',
        },
        botao_finalizar: {
            borderWidth: 1,
            borderColor: "#ffffff",
            backgroundColor: "#2aacc0",
            justifyContent: 'center',
            width: 120,
            fontWeight: 'bold',
            borderRadius: 5,
            height: 40,
            alignItems: 'center',
        },
        texto_botao_finalizar: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 20,
        }
    });

    return(
        <View style={styles.container_botao_finalizar}>
            <TouchableOpacity
                style={styles.botao_finalizar}
                onPress={() => navigation.navigate("AtividadeFinalizada")}
                activeOpacity={0.8}
            >
                <Text style={styles.texto_botao_finalizar}>Concluir</Text>
            </TouchableOpacity>
        </View>
    );
}
