//app/auth/register/route.tsx
import axios from '../../../../axios';
import { isAxiosError } from 'axios';

export const register = async (username: string, password: string): Promise<any> => {
  try {
    const response = await axios.post('/register', { username, password });
    return response.data;
  } catch (error: any) {
    if (isAxiosError(error)) { 
      if (error.response) {
        const message = error.response.data.Mensaje || 'Error desconocido al intentar registrarse';
        throw new Error(message);
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor');
      } else {
        throw new Error('Error al configurar la solicitud');
      }
    } else {
      throw new Error('Error desconocido al intentar registrarse ' + error.message);
    }
  }
};
