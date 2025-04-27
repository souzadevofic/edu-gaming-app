import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderInicio(){

    const styles = StyleSheet.create({
        container_header_inicio: {
            backgroundColor: "#2aacc0",
            height: 250,
            width: "100%"
        }
    });

    return(
        <View style={styles.container_header_inicio}>
            {/* <View>
                <Text>Olá, Usuário</Text>
                <Text>Nome do curso:</Text>
                <Text>Matricula:</Text>
            </View> */}
        </View>
    );
}
