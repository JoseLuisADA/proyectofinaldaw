"use client"
// hooks/useRegister.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Asegúrate de usar next/navigation
import { useUserContext } from '../context/UserContext';

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { handleSetUserUsername } = useUserContext();

  const register = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al registrarse');
      }

      handleSetUserUsername(username);
      router.push('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};

export default useRegister;
