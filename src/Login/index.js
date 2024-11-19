import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function Login({navigation}) {


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                <Text style={styles.title}>Entre ou cadastre-se</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>


               


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