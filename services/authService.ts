import axios from 'axios';

const API_URL = 'http://localhost:5130/api/Auth';

export const login = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, {
    email: data.email,
    passwordHash: data.password, // Backend'de şifre passwordHash alanında bekleniyor
  });
  return response.data;
};

export const register = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/register`, {
    email: data.email,
    passwordHash: data.password,
    role: 'User', // default role
  });
  return response.data;
};
