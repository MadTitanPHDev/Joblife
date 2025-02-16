import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilUsuario = () => {
    const [user, setUser] = useState(null);
   

    // Função para carregar os dados do usuário do AsyncStorage
    const loadUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('localUser');
            if (userData) {
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.error('Erro ao carregar dados do usuário:', error);
        }
    };

    // Simulação de uma lista de favoritos (substitua por sua lógica real)
    

    useEffect(() => {
        loadUserData();
       
    }, []);

    if (!user) {
        return <Text>Carregando...</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Seção do Perfil */}
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: user.imagem || 'http://192.168.50.253:3333/users' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>{user.nome}</Text>
                    <Text style={styles.profileInfo}>{user.email}</Text>
                    <Text style={styles.profileInfo}>{user.telefone}</Text>
                </View>

                
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileInfo: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    favoritesSection: {
        width: '100%',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    favoriteItem: {
        backgroundColor: '#000',
        borderRadius: 10,
        marginRight: 10,
        padding: 10,
        alignItems: 'center',
    },
    favoriteImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    favoriteName: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default PerfilUsuario;