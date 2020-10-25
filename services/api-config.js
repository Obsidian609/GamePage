import axios from 'axios'

baseURL = 'http://localhost:3000'

const api = axios.create({
    baseURL: baseURL
})

export default api

