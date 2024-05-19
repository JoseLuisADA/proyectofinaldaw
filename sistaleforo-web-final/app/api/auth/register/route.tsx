//app/auth/register/route.tsx
import axios from '../../../../axios';

export const register = async (username: string, password: string): Promise<any> => {
  try {
    const response = await axios.post('/register', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Error al crear la cuenta');
  }
};
