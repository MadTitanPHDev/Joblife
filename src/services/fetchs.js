import api from "./api";
import axios from "axios";

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
        const response = await axios.get('http://10.57.45.56:3333/usuarios');
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };









