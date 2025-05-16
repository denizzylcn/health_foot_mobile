// app/services/api.ts
import axios from 'axios';
import { Platform } from 'react-native';

const API = axios.create({
  baseURL: Platform.OS === 'android'
    ? 'http://10.192.81.73:5130/api' // ← senin bilgisayar IP adresin + backend portu
    : 'http://localhost:5130/api',
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

export default API;
