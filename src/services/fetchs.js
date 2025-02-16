import api from "./api"


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

export const cadastrarServico = async (formData) => {
    try {
        console.log('fetch: ',formData)
        const { data } = await api.post('/catalogoServicos', formData);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};

export const perfilUsuario = async () => {
    try {
        // Faz a requisição para buscar o perfil do usuário
        const response = await api.get('/users/id'); // Ou '/users/id', dependendo da sua API
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar perfil:", error.response?.data || error.message);
        throw error;
    }
};









