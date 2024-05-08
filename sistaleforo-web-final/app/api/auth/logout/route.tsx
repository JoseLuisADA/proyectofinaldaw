import axios from 'axios';

const API_BASE_URL = process.env.API_SERVER_URL; // Asegúrate de tener esta variable en tu .env

// Función para realizar el logout
export const logout = async (): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/logout`);
    // No necesita devolver nada, simplemente realiza el logout
  } catch (error) {
    // Captura y re-lanza el error para manejarlo en el contexto
    throw new Error(error.response?.data.message || 'Failed to logout');
  }
};
