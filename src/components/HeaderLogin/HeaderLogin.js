import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function HeaderLogin() {

    const styles = StyleSheet.create({
        container_logo: {
            backgroundColor: "#2aacc0",
            height: 300,
            width: '100%',
        },
        container_imagem: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        logo: {
            width: 280,
            height: 200,
            marginTop: 20,
        }
    });
    
    return (
        <View style={styles.container_logo}>
            <View style={styles.container_imagem}>
                <Image 
                    source={require('../../../assets/logo-edugaming.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}
