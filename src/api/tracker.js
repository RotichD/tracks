import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://f2a0-2601-644-300-88e0-e4cf-2e8e-42d1-67bd.ngrok.io/',
  headers: {
    'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
