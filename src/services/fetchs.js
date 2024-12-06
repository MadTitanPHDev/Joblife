import api from "./api"

// export const postLogin = async (data) => {
//     const response = await api.post('/login', data);
//     return response.data;
// };

 export const postLogin = async (data) => {
    const { email, senha } = data;

    // Validação temporária
    if (email === 'fernando@senacsp.edu.br' && senha === '123456') {
        return { success: true }; // Simula login bem-sucedido
    } else {
        return { success: false }; // Simula falha no login
    }
};







