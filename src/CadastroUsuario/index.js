import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    ScrollView,
    Image,
} from 'react-native';
import { cadastroUsuario } from '../services/fetchs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useMutation } from '@tanstack/react-query';
import AuthContext from '../AuthContext';


const CadastroUsuario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('cliente');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState(null);
    const { setIsAuthenticated } = React.useContext(AuthContext);

    const mutation = useMutation({
        mutationFn: ({ nome, email, senha, telefone, imagem }) => {
            const formData = new FormData();

            // formData.append('user', { nome, email, senha, telefone, tipoUsuario, imagem });

            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('senha', senha);
            formData.append('telefone', telefone);



            if (imagem) {

                
                formData.append('imagem', {
                    uri: imagem,
                    type: 'image/jpeg',
                    name: 'imagem.jpg'
                });
            }
            return cadastroUsuario(formData);
        },

        onSuccess: async (data) => {
            console.log("dados recebidos: ", data);
            const user = data?.user;
            const token = data?.token;
            if (user && token) {
                await AsyncStorage.setItem('localUser', JSON.stringify(user));
                await AsyncStorage.setItem('localToken', token);
                setIsAuthenticated(true);
            } else {
                console.error('Dados inválidos: ', data);
            }
        }

    });

    const handleImagemUsuario = () => {
        Alert.alert(
            "Selecione uma imagem", "Informe de onde você quer pegar a foto", [
            {
                text: 'Galeria',
                onPress: () => pickImageFromGalery(),
                style: 'default',
            },
            {
                text: 'Camera',
                onPress: () => pickImageFromCamera(),
                style: 'default',
            },
        ]);
    };

    const pickImageFromGalery = async () => {
        const options = {
            mediaType: 'photo',
        };
        const result = await launchImageLibrary(options);
        if (result?.assets && result.assets.length > 0) {
            console.log('Imagem selecionada da galeria:', result);
            const imageUri = result.assets[0].uri
            console.log("Imagem da Galeria:", imageUri); // Verifique a URI
            setImagem(imageUri); // Atualize o estado com a URI
        }
    };

    const pickImageFromCamera = async () => {
        const options = {
            mediaType: 'photo',
        };
        const result = await launchCamera(options);
        if (result?.assets && result.assets.length > 0) {
            const imageUri = result.assets[0].uri
            console.log("Imagem da Camera:", imageUri); // Verifique a URI
            setImagem(imageUri); // Atualize o estado com a URI
        }
    };

    return (

        <SafeAreaView style={styles.container} >
            {/* <ImageBackground source={require('../assets/backGround.png')} resizeMode="cover" style={styles.image}> */}

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                keyboardType="text"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
            />


            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="Informe uma senha"
                secureTextEntry

            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu telefone"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
            />



            <View>
                <TouchableOpacity style={styles.buttonImagem} onPress={handleImagemUsuario}>
                    <Text style={styles.textButton}>Selecione uma imagem</Text>
                </TouchableOpacity>
                {imagem &&
                    (<Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
                    )}
            </View>


            <TouchableOpacity
                style={styles.buttonComecar}
                onPress={() => {
                    console.log({ nome, email, senha, telefone, imagem });
                    mutation.mutate({ nome, email, senha, telefone, imagem: imagem });
                }}
            >
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

            {/* </ImageBackground> */}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },

    buttonComecar: {
        borderRadius: 50,
        backgroundColor: "#023f57",
        padding: 10,
        alignItems: "center",
        borderTopEndRadius: 25,
        borderBottomEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomStartRadius: 25,
        paddingHorizontal: 80,
        marginBottom: 80
    },
    buttonImagem: {
        borderRadius: 50,
        backgroundColor: "#023f57",
        padding: 10,
        alignItems: "center",
        borderTopEndRadius: 25,
        borderBottomEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomStartRadius: 25,
        paddingHorizontal: 80,
        marginBottom: 80
    },
    textButton: {
        color: "white"
    },
    containerCadastrar: {
        backgroundColor: 'red',
        width: '90%',
        height: '80%',

        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'

    },

    textComecar: {
        width: '90%',
        fontSize: 45,
        textAlign: 'left',
        color: '#023f57',
    },

    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        placeholderTextColor: 'red',
        backgroundColor: 'offwhite',
    },
    label: {
        width: 300,
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
    },


});

export default CadastroUsuario;