import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from './src/BemVindo';
import Login from './src/Login';
import Correios from './src/Correios';
import CadastroUsuario from './src/CadastroUsuario';
import Home from './src/Home';

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          
          <Stack.Screen name="BemVindo" component={BemVindo} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Correios" component={Correios} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />

          
          </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>

  )
}