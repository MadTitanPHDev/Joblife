import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BemVIndo from './src/BemVindo';
import Login from './src/Login';
import Categorias from './src/Categorias';
import Servicos from './src/Servicos';




export default function App() {
  return(
    <BemVIndo/>
    // <Login/>
    // <Categorias/>
    // <Servicos/>
    
  )
}