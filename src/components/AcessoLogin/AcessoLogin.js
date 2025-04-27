import React from 'react';
import {  View, Text, TextInput, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';

export default function AcessoLogin({ navigation }) {
     
    const styles = StyleSheet.create({
        scrollContainer: {
            flex: 1,
        },

        container_login: {
            marginTop: -20,
            justifyContent: "center",
            alignItems: "center",
        },

        container_input: {
            marginTop: 60,
            alignItems: "center",
            flexDirection: "column",
            padding: 20,
            justifyContent: "center",
        },

        input: {
            width: 330,
            height: 60,
           
            borderRadius: 8,
            padding: 20,
            
            borderColor: "#2aacc0",
            borderWidth: 1,
            fontSize: 16,
            marginBottom: 16,
        },

        botao_login: {
            borderWidth: 1,
            borderColor: "#ffffff",
            backgroundColor: "#2aacc0",
            justifyContent: 'center',
            width: 330,
            fontWeight: 'bold',
            borderRadius: 8,
            height: 60,
            alignItems: 'center',
        },

        texto_botao: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 25,
        },

        titulo_login: {
            fontSize: 30,
            fontWeight: "bold",
            color: "#2aacc0",
            textAlign: "center",
            marginBottom: 30,
        },

        texto_recuperacao: {
            fontSize: 14,
            fontWeight: 500,
            color: "#000000",
            marginTop: 20,
            textAlign: "center",
        },
        
        link: {
            color: "#2aacc0",
            textDecorationLine: "underline",
        }
    });

    const abrirLink = () => {
        Linking.openURL('#'); 
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.container_login}>
                <View style={styles.container_input}>
                    <Text style={styles.titulo_login}>LOGIN</Text>

                    <TextInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Matrícula"
                        placeholderTextColor="#2aacc0"
                    />

                    <TextInput 
                        style={styles.input}
                        secureTextEntry={true} 
                        placeholder="Senha"
                        placeholderTextColor="#2aacc0"
                    />

                    <TouchableOpacity
                        style={styles.botao_login}
                        onPress={() => navigation.navigate("HomeTabs")}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.texto_botao}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.texto_recuperacao}>
                    Esqueceu sua senha?{" "}
                    <Text style={styles.link} onPress={abrirLink}>
                        Recupere com o SIA
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
}
