// app/services/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5130/api', // Burayı API adresine göre güncelle
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else  {
    delete API.defaults.headers.common['Authorization'];
  }
};

export default API;
