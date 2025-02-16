import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Alert, Button, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import AuthContext from '../AuthContext';



const BemVIndo = ({navigation}) => {
  const isAuthenticated  = useContext(AuthContext);
  console.log('isAuthenticated: ',isAuthenticated)
  return (

  <SafeAreaView style={styles.container} >    
    <ImageBackground source={require('../assets/backGround.png')} resizeMode="cover" style={styles.image}>
      
      

      <View style={styles.containerComecar}>
        <Text style={styles.textComecar}>Conectando Você ao Trabalho de quem mais precisa.</Text>
      </View>

      <TouchableHighlight style={styles.buttonComecar} onPress={() => navigation.navigate('Login')}>
        <View>
          <Text style={styles.textButton}>Começar</Text>
        </View>
      </TouchableHighlight>

    

    </ImageBackground>    
  </SafeAreaView>
)};
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
  containerComecar: {
    width: '90%',
    height: '80%',
    
    // backgroundColor: 'pink',
    alignItems:'center',
    justifyContent:'center'
    
  },

  textComecar: {
    width: '90%',
    fontSize: 45,
    textAlign:'left',
    color:'#023f57',
  },


});

export default BemVIndo;