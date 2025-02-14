import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUsuario, atualizarStatus } from '../services/fetchs';
import { useEffect } from 'react';

const PerfilUsuario = () => {
    const { data: perfilUsuario, error, isLoading } = useQuery({
        queryKey: ['perfilUsuario'],
        queryFn: getUsuario
        
    });

    const mutation = useMutation({
        mutationFn: () => {
            
            return atualizarStatus({tipo_usuario: isPrestador ? 'cliente' : 'profissional'});
        },

        onSuccess: async (data) => {
            console.log('Status atualizado com sucesso:', data);
            perfilUsuario.tipo_usuario = data?.tipo_usuario;
            if (data?.tipo_usuario ==='profissional') {
                
                setIsPrestador(true);
            } else {
                setIsPrestador(false);
            }
        }

    });

    const [isPrestador, setIsPrestador] = useState(false);

    useEffect(() => {
        // if (perfilUsuario && perfilUsuario.length > 0) {
            if (perfilUsuario) {

                if (perfilUsuario?.tipo_usuario ==='profissional') {
                    setIsPrestador(true);
                }
        }
    },[perfilUsuario]);
    //   }, [perfilUsuario]);

    //   const tornarPrestador = async () => {
    //     try {
    //       console.log('Botão pressionado!');
      
    //       if (perfilUsuario && perfilUsuario.length > 0) {
    //         const usuarioAtualizado = { ...perfilUsuario };
    //         if (isPrestador) {
    //           usuarioAtualizado.tipo_usuario = 'cliente';
    //         } else {
    //           usuarioAtualizado.tipo_usuario = 'profissional';
    //         }
      
    //         await atualizarStatus(usuarioAtualizado.id, usuarioAtualizado);
    //         setIsPrestador(!isPrestador);
    //       } else {
    //         console.error('Erro: perfilUsuario é undefined');
    //       }
    //     } catch (error) {
    //       console.error('Erro ao tornar prestador', error);
    //     }
    //   };


    console.log(perfilUsuario)

    if (isLoading) {
        return <Text>Carregando...</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Seção do Perfil */}
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: 'http://10.57.45.56:3333/users/' + perfilUsuario?.foto_usuario }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>{perfilUsuario?.nome}</Text>
                    <Text style={styles.profileInfo}>{perfilUsuario?.email}</Text>
                    <Text style={styles.profileInfo}>{perfilUsuario?.telefone}</Text>
                    <Text style={styles.profileInfo}>{perfilUsuario?.tipo_usuario}</Text>
                </View>
                <Text>Olá, {perfilUsuario?.nome}</Text>
                <TouchableOpacity style={styles.button} onPress={() => {mutation.mutate()}}>
                    <Text>{isPrestador ? 'Você é um prestador de serviço' : 'Quer prestar serviço ?'}</Text>
                </TouchableOpacity>
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

    button: {
        backgroundColor: '#E5E6E2',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
});

export default PerfilUsuario;