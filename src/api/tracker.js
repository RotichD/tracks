import axios from 'axios';

export default axios.create({
  baseURL: 'http://52b3-2601-644-300-88e0-b8a5-ba0e-3385-a5ed.ngrok.io',
  headers: {
    'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
  },
});
