import api from "./api";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const atualizarStatus = async (body) => {
    try {
        console.log('fetch: ',body)
        const response = await api.put('/users/atualizar-status', body);
        return response.data;
    } catch (error) {
        console.log(error)
        console.error("Erro ao atualizar status:", error.response?.data || error.message);
        throw error;
    }
}


export const postLogin = async (body) => {
    try {
        const response = await api.post('/login', body);
        console.log("Resposta completa:", response);
        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error.response?.data || error.message);
        throw error;
    }
};



export const cadastroUsuario = async (formData) => {
    try {
        console.log('fetch: ',formData)
        const { data } = await api.post('/users', formData);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};


export const getUsuario = async () => {

    try {
        // Faz a requisição para buscar o perfil do usuário
        const response = await api.get('/users'); // Ou '/users/id', dependendo da sua API
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar perfil:", error.response?.data || error.message);
        throw error;
    }
};


export const getUsuarios = async () => {
    try {
        const response = await axios.get('http://192.168.50.18:3333/usuarios');
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    export const cadastrarServico = async (formData) => {
        try {
            const token = await AsyncStorage.getItem('localToken'); // Recupera o token do AsyncStorage
    
            console.log('fetch: ', formData); // Log para depuração
    
            const { data } = await api.post('/catalogoServicos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo
                    Authorization: `Bearer ${token}`, // Envia o token de autenticação
                },
            });
    
            return data; // Retorna os dados da resposta
        } catch (error) {
            console.error('Erro ao cadastrar serviço:', error.response?.data || error.message);
            throw error; // Lança o erro para ser tratado no componente
        }
    };

    export const listarServicos = async () => {
        try {
            const response = await api.get('/catalogoServicos'); // Requisição sem token
            return response.data; // Retorna os dados da resposta
        } catch (error) {
            console.error('Erro ao listar serviços:', error.response?.data || error.message);
            throw error; // Lança o erro para ser tratado no componente
        }
    };

    export const listarServicosItens = async () => {
        try {
            const response = await api.get('/catalogoServicosItens'); // Requisição sem token
            return response.data; // Retorna os dados da resposta
        } catch (error) {
            console.error('Erro ao listar itens:', error.response?.data || error.message);
            throw error; // Lança o erro para ser tratado no componente
        }
    };

    export const cadastrarServicoItem = async (formData) => {
        try {
            const token = await AsyncStorage.getItem('localToken'); // Recupera o token do AsyncStorage
    
            console.log('fetch: ', formData); // Log para depuração
    
            const { data } = await api.post('/catalogoServicosItens', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo
                    Authorization: `Bearer ${token}`, // Envia o token de autenticação
                },
            });
    
            return data; // Retorna os dados da resposta
        } catch (error) {
            console.error('Erro ao cadastrar serviço:', error.response?.data || error.message);
            throw error; // Lança o erro para ser tratado no componente
        }
    };
    