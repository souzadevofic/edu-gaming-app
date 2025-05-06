import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ContainerPerfil() {
    
    const styles = StyleSheet.create({
        container_perfil: {
            flex: 1,
            top: 50,
        },
        icone_perfil: {
            width: 20,
            height: 20
        },
        titulo_perfil: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            color: "#000",
            left: 10
        },
        titulo_opcoes: {
            top: 10,
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            color: "#000",
            left: 10
        },
        opcao_perfil: {
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderBottomColor: "#E5E3E3",
            borderBottomWidth: 1,
            width: "100%", 
            alignSelf: "stretch", 
        },
        linha_perfil: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
        },
        dados_perfil: {
            fontSize: 16,
            color: "#000000",
        },
    });

    return (
        <View style={styles.container_perfil}>
            <Text style={styles.titulo_perfil}>Dados Pessoais</Text>

            <View style={styles.opcao_perfil}>
                <View style={styles.linha_perfil}>
                    <Image style={styles.icone_perfil} source={require('../../../assets/perfil.png')}/>
                    <Text style={styles.dados_perfil}>Alisson Souza</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.opcao_perfil}>
                <View style={styles.linha_perfil}>
                    <Image style={styles.icone_perfil} source={require('../../../assets/email.png')}/>
                    <Text style={styles.dados_perfil}>alissonso432@gmail.com</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opcao_perfil}>
                <View style={styles.linha_perfil}>
                    <Image style={styles.icone_perfil} source={require('../../../assets/capelo.png')}/>
                    <Text style={styles.dados_perfil}>Análise Desenvolvimento de Sistemas</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.titulo_opcoes}>Mais Opções</Text>

            <TouchableOpacity style={styles.opcao_perfil}>
                <View style={styles.linha_perfil}>
                    <Image style={styles.icone_perfil} source={require('../../../assets/sair.png')}/>
                    <Text style={styles.dados_perfil}>Sair</Text>
                </View>
            </TouchableOpacity>
        </View>        
    );
}    
