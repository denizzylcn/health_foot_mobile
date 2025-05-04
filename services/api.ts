// app/services/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.1.12:5130/api', 
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else  {
    delete API.defaults.headers.common['Authorization'];
  }
  
};

export default API;
