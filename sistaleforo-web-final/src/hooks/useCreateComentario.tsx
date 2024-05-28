// hooks/useCreateComentario.tsx
import { useState } from 'react';
import axios from '../../axios'; // Asegúrate de tener correctamente configurada la instancia de Axios si es necesario
import { useRouter } from 'next/router';
import { isAxiosError } from 'axios';

const useCreateComentario = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const createComentario = async (contenido: string, idArticulo: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/comentarios', {
        contenido,
        idArticulo,
        username: 'currentUsername', // Aquí deberías asegurarte de obtener el nombre de usuario correcto, posiblemente desde el contexto de autenticación o una cookie
        fecha: new Date() // Este valor se establecerá automáticamente en el servidor también, pero puedes enviarlo si lo necesitas
      });

      if (response.status === 201) {
        router.push(`/articulos/${idArticulo}`); // Redirigir al usuario a la página del artículo tras crear el comentario
      }
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        setError(error.response.data.message || 'Error al crear el comentario');
      } else {
        setError('Error desconocido al intentar crear el comentario');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { createComentario, isLoading, error };
};

export default useCreateComentario;
