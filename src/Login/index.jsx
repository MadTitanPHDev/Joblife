import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { postLogin } from '../services/fetchs';
import { useState } from 'react';
import { Button } from 'react-native';
import Correios from '../Correios'

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            console.log({ email, senha })
            const response = await postLogin({ email, senha });
            if (response.success) {
                navigation.navigate('Home'); // Navega se login for bem-sucedido
            } else {
                alert('Login inválido!');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao fazer login.');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                <Text style={styles.title}>Entre ou cadastre-se</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>


                <Button
                    title="Consultar CEP"
                    onPress={() => navigation.navigate('Correios')}
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