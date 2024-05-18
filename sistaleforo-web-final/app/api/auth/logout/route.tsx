//app/auth/logout/route.tsx
import axios from '../../../../axios';

const API_BASE_URL = process.env.API_SERVER_URL; // Asegúrate de tener esta variable en tu .env

// Función para realizar el logout
export const logout = async (): Promise<void> => {
  try {
    await axios.post(`/logout`);
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to logout');
  }
};
