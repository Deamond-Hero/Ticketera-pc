// archivo para peticiones

import axios from 'axios';

const api = axios.create({
    baseURL: VITE_API_URL
})

//INTERCEPTORES
api.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default api;