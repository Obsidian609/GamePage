import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production' ? 'https://gamepage-api.herokuapp.com/' : "http://localhost:3000";

const api = axios.create({
  baseURL: baseURL,
});

export default api;