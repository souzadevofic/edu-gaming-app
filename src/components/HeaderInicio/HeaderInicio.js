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
        titleName: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
            marginBlock: 8,
        },
        textMat: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "300",
            marginBottom: 4,
        },
        textCourse: {
            color: "#fff",
            fontSize: 20,
            fontWeight: "600",
        }
    });

    return (
        <View style={styles.container_header_inicio}>
            <View>
                <Text style={styles.titleName}>Olá, {nomeUsuario}</Text>
                <Text style={styles.textMat}>{matricula}</Text>
                <Text style={styles.textCourse}>{nomeCurso}</Text>
            </View> 
        </View>
    );
}
