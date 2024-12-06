import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { launchImageLibrary } from 'react-native-image-picker';

import { Alert, Button, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View, Picker } from 'react-native';



const CadastroUsuario = ({ navigation }) => (

    <SafeAreaView style={styles.container} >
        <ImageBackground source={require('../assets/backGround.png')} resizeMode="cover" style={styles.image}>


            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}

                placeholder="digite seu nome"
                keyboardType="text"
            //   onChangeText={onChangeText}       
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                //   value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />


            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                //   value={number}
                placeholder="digite uma senha"

            />
            {/* <Text style={styles.label}>Escolha uma opção:</Text> */}
            {/* <Picker */}
            {/* //     selectedValue={selectedOption}
            //     // onValueChange={(itemValue) => setSelectedOption(itemValue)}
            //     style={styles.picker}
            // >
            //     <Picker.Item label="Opção 1" value="opcao1" />
            //     <Picker.Item label="Opção 2" value="opcao2" />
            //     <Picker.Item label="Opção 3" value="opcao3" /> */}
            {/* </Picker> */}

            <Text style={styles.label}>Escolha uma opção:</Text>
            <TextInput
                style={styles.input}
                value='cliente'
            //   onChangeText={onChangeText}       
            />
             <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                value='cliente'
            //   onChangeText={onChangeText}       
            />

            <TouchableHighlight style={styles.buttonComecar} onPress={() => navigation.navigate('Login')}>
                <View>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </View>
            </TouchableHighlight>
                
          
            



        </ImageBackground>
    </SafeAreaView>
);
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
        backgroundColor: 'white',
    },
    label: {
        width: 300,
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
        marginBottom: 4,
    },


});

export default CadastroUsuario;