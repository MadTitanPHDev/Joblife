import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { postLogin } from '../services/fetchs';
import React, { useContext, useState } from 'react';
import { Button } from 'react-native';
import Correios from '../Correios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../AuthContext';

export default function Login({ navigation }) {

    const isAuthenticated  = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // const handleLogin = async () => {
    //     try {
    //         console.log({ email, senha })
    //         const response = await postLogin({ email, senha });
    //         if (response.success) {
    //             navigation.navigate('Home'); // Navega se login for bem-sucedido
    //         } else {
    //             alert('Login inválido!');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         alert('Erro ao fazer login.');
    //     }
    // };

    const handleLogin = async () => {
        console.log("Tentando login com:", { email, senha });
    
        try {
            const response = await postLogin({ email, senha });
            console.log("Resposta do servidor:", response);
    
            if (response.user && response.user.token) {
                console.log("Usuário autenticado com sucesso!");
    
                // Armazenando os dados no AsyncStorage
                await AsyncStorage.setItem('localUser', JSON.stringify(response.user));
                await AsyncStorage.setItem('localToken', response.user.token);
    
                navigation.navigate('Home'); 
            } else {
                alert(response.message || 'Login inválido!');
            }
        } catch (error) {
            console.error("Erro no login:", error);
    
            if (error.response) {
                console.log("Erro na requisição:", error.response.data);
                alert(error.response.data.message || "Erro ao fazer login.");
            } else {
                alert("Erro de conexão com o servidor.");
            }
        }
    };
    if(isAuthenticated) {
        navigation.navigate('Home'); 
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                <Text style={styles.title}>Entre ou cadastre-se</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>


                <Button
                    title="Cadastre-se"
                    onPress={() => navigation.navigate('CadastroUsuario')}
                />




            </View>

        </TouchableWithoutFeedback>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        marginBottom: 14,
        fontSize: 20,
    },
    input: {
        width: '90%',
        height: 45,
        backgroundColor: '#e6e6e6',
        borderRadius: 4,
        marginBottom: 14,
        padding: 8,
    },
    button: {
        width: '90%',
        height: 45,
        backgroundColor: '#023f57',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})