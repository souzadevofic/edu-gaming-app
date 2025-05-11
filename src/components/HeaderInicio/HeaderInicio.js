import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderInicio({ nomeUsuario, matricula, nomeCurso }) {

    const styles = StyleSheet.create({
        container_header_inicio: {
            backgroundColor: "#2aacc0",
            height: 250,
            width: "100%",
            justifyContent: 'flex-end',
            padding: 20,
        },

        titleNome: {
            color: "#fff",
            fontSize: 26,
            fontWeight: "bold",
            marginBlock: 8,
        },

        textMatricula: {
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
            marginBottom: 4,
        },

        textCurso: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
        }
    });

    return (
        <View style={styles.container_header_inicio}>
            <View>
                <Text style={styles.titleNome}>Olá, {nomeUsuario}</Text>
                <Text style={styles.textMatricula}>{matricula}</Text>
                <Text style={styles.textCurso}>{nomeCurso}</Text>
            </View> 
        </View>
    );
}