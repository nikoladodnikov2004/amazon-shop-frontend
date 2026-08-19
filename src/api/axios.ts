import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7159/api', // Провери дали това е твоят порт от .NET бекенда
  headers: {
    'Content-Type': 'application/json',
  },
});

// Автоматично закачане на JWT токена към всяка заявка
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;