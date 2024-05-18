//app/auth/login/route.tsx
import axios from '../../../../axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL; // Asegúrate de tener esta variable en tu .env

// Función para realizar el login
export const login = async (username: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Credenciales inválidas');
  }
};
