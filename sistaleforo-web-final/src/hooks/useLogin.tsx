"use client"
// hooks/useLogin.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Asegúrate de usar next/navigation
import { useUserContext } from '../context/UserContext';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { handleSetUserUsername } = useUserContext();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Esto es importante para enviar cookies
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      handleSetUserUsername(username);  // Actualizamos el contexto con el nuevo username
      router.push('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
