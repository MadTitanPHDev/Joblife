// import { Text } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "@react-navigation/elements";




const PerfilProfissional = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('./../assets/paulo.png')} />
            <Text style={styles.nome}>Paulo</Text>
            <Text style={styles.email}>paulo@gmail.com</Text>
            <Text style={styles.telefone}>(11) 99999-9999</Text>
            <View style={styles.sobreMim}>
                <Text style={{ color: 'blue' }}>Sobre mim</Text>
                <Text style={{ marginTop: 8 }}>Olá, sou Paulo, um desenvolvedor fullstack com paixão por criar soluções inovadoras e eficientes. Com experiência em tecnologias como React, Node.js e MongoDB, busco sempre entregar projetos de alta qualidade e impacto.</Text>
                <Text>Sou um profissional dedicado e apaixonado por aprender, sempre buscando melhorar minhas habilidades e conhecimentos para entregar soluções que atendam às necessidades dos meus clientes. Além disso, sou um grande entusiasta de tecnologia e inovação, e busco sempre estar atualizado sobre as últimas tendências e avanços no mercado. Porem sou mais apaixonado na minha namorada</Text>
            </View>

            <View>
                <Text style={{ color: 'blue' }}>Voltar</Text>
                <Button title="Ir para outra tela" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>

    );
};

export default PerfilProfissional;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    sobreMim: {
        width: '90%',
        height: 300,
        backgroundColor: '#e6e6e6',
        borderRadius: 4,
        marginBottom: 14,
        padding: 8,
        alignItems: 'center',

        marginTop: 20,
    },
});
