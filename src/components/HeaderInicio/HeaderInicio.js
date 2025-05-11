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
<<<<<<<<< Temporary merge branch 1
        titleNome: {
=========
        titleName: {
>>>>>>>>> Temporary merge branch 2
            color: "#fff",
            fontSize: 26,
            fontWeight: "bold",
            marginBlock: 8,
        },
<<<<<<<<< Temporary merge branch 1
        textMatricula: {
=========
        textMat: {
>>>>>>>>> Temporary merge branch 2
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
            marginBottom: 4,
        },
<<<<<<<<< Temporary merge branch 1
        textCurso: {
=========
        textCourse: {
>>>>>>>>> Temporary merge branch 2
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
        }
    });

    return (
        <View style={styles.container_header_inicio}>
            <View>
<<<<<<<<< Temporary merge branch 1
                <Text style={styles.titleNome}>Olá, {nomeUsuario}</Text>
                <Text style={styles.textMatricula}>{matricula}</Text>
                <Text style={styles.textCurso}>{nomeCurso}</Text>
=========
                <Text style={styles.titleName}>Olá, {nomeUsuario}</Text>
                <Text style={styles.textMat}>{matricula}</Text>
                <Text style={styles.textCourse}>{nomeCurso}</Text>
>>>>>>>>> Temporary merge branch 2
            </View> 
        </View>
    );
}
