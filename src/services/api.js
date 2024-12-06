import axios from "axios";

// localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoxLCJpYXQiOjE3MzMzNTE3MjMsImV4cCI6MTczMzQzODEyM30.hcnA9fIbrvybK2d3f7TwUT0p88vY04tUVl4hG_P3CXY');

const api = axios.create({
    baseURL: `http://localhost:3333/login`
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// api.interceptors.request.use(tokenMiddleware);

export default api;