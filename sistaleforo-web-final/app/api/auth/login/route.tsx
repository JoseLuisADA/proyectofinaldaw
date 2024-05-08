import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL; // Asegúrate de tener esta variable en tu .env

// Función para realizar el login
export const login = async (username: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data; // Devuelve la respuesta para manejarla en el contexto
  } catch (error) {
    // Captura y re-lanza el error para manejarlo en el contexto
    throw new Error(error.response?.data.message || 'Credenciales inválidas');
  }
};
