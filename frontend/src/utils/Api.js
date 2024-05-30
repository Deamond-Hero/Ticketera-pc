// archivo para peticiones

import axios from 'axios';
import { getEnvVar } from '../helper/getEnvVar';

const { VITE_PUBLIC_BACKEND_URL } = getEnvVar();

const api = axios.create({
    baseURL: VITE_PUBLIC_BACKEND_URL
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