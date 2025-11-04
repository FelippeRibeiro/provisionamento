// services/api.ts
import axios, { AxiosInstance } from 'axios'

// Use a mesma porta do frontend (3000) para as requisições da API
const API_URL = 'http://localhost:8000'

const api: AxiosInstance = axios.create({
  baseURL: API_URL, // Agora aponta para a mesma origem
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar token
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api