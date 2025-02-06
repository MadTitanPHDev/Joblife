import api from "./api"

// export const postLogin = async (body) => {
//     const response = await api.post('/login', body); // ✅ Correto!
//     return response.data;
// };

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










