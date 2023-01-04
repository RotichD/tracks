import axios from 'axios';

export default axios.create({
  baseURL: 'http://527e-2601-644-300-88e0-5536-e9d4-4a2f-b505.ngrok.io/',
  headers: {
    'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
  },
});
