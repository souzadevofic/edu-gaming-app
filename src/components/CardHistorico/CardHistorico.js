import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function CardHistorico() {
    const styles = StyleSheet.create({
        container_historico: {
            flex: 1,
            alignItems: "center",
        },
        scroll_area: {
            width: "100%",
        },
        scroll_content: {
            alignItems: "center",
            gap: 20,
        },
        card_historico: {
            top: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2aacc0",
            gap: 10,
            minHeight: 150,
            width: 300,
            borderRadius: 10,
            padding: 10,
        },
        titulo_historico: {
            textAlign: "center",
            color: "#ffffff",
            fontSize: 20,
            fontWeight: "600",
            flexWrap: "wrap",
        },
        resultado_historico: {
            color: "#ffffff",
        },
        imagem_seta: {
            height: 30,
            width: 30,
        }
    });

    return (
        <View style={styles.container_historico}>
            <ScrollView style={styles.scroll_area} contentContainerStyle={styles.scroll_content}>
                <View style={styles.card_historico}>
                    <Text style={styles.titulo_historico}>Tópicos de Big Data em Python</Text>
                    <Text style={styles.resultado_historico}>Resultado: 8/10</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.imagem_seta} source={require('../../../assets/seta.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.card_historico}>
                    <Text style={styles.titulo_historico}>Programação Para Dispositivos Móveis em Android</Text>
                    <Text style={styles.resultado_historico}>Resultado: 8/10</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.imagem_seta} source={require('../../../assets/seta.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.card_historico}>
                    <Text style={styles.titulo_historico}>Aplic. de Cloud, IoT e Indústria 4.0 em Python</Text>
                    <Text style={styles.resultado_historico}>Resultado: 8/10</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.imagem_seta} source={require('../../../assets/seta.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.card_historico}>
                    <Text style={styles.titulo_historico}>Engenharia de Software</Text>
                    <Text style={styles.resultado_historico}>Resultado: 9/10</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.imagem_seta} source={require('../../../assets/seta.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}


