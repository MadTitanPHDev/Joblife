import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import axios from "axios";

export default function App() {
  const [cep, setCep] = useState(""); // Armazena o CEP digitado
  const [data, setData] = useState(null); // Armazena os dados do CEP
  const [error, setError] = useState(null); // Armazena erros de requisição

  const buscarCep = () => {
    if (cep.length !== 8 || isNaN(cep)) {
      setError("Digite um CEP válido com 8 números.");
      setData(null);
      return;
    }

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if (response.data.erro) {
          setError("CEP não encontrado.");
          setData(null);
        } else {
          setData(response.data);
          setError(null);
        }
      })
      .catch(() => setError("Erro ao buscar o CEP. Tente novamente."));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (somente números)"
        keyboardType="numeric"
        maxLength={8}
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar CEP" onPress={buscarCep} />
      {error && <Text style={styles.error}>{error}</Text>}
      {data ? (
        <View style={styles.result}>
          <Text>CEP: {data.cep}</Text>
          <Text>Logradouro: {data.logradouro}</Text>
          <Text>Complemento: {data.complemento || "Não informado"}</Text>
          <Text>Bairro: {data.bairro}</Text>
          <Text>Cidade: {data.localidade}</Text>
          <Text>Estado (UF): {data.uf}</Text>
        </View>
      ) : (
        !error && <Text>Digite um CEP para buscar.</Text>
      )}
      <View>
      <Image
        style={styles.imageCep}
        source={require('../assets/cep.png')}
      />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  imageCep:{
    width: 400,
    height: 400,
  },
  error: { color: "red", marginVertical: 10 },
  result: { marginTop: 20 },
});
