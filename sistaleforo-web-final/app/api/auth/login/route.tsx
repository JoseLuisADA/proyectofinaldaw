//app/auth/login/route.tsx
import axios from '../../../../axios';

export const login = async (username: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Credenciales inválidas');
  }
};
