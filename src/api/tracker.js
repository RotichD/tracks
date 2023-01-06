import axios from 'axios';

export default axios.create({
  baseURL: 'http://a629-2601-644-300-88e0-6856-9d45-42b1-ba0f.ngrok.io',
  headers: {
    'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
  },
});
