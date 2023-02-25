import axios from 'axios';

const API = axios.create({
    baseURL: process.env.API_URL || 4000
});

export default API;