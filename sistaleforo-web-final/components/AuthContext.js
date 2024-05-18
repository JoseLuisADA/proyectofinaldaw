// components/AuthContext.js
import React, { createContext, useState } from 'react';
import { useRouter } from 'next/navigation'; // Importamos el enrutador de navegación de Next.js
import { login as apiLogin } from '../app/api/auth/login/route';
import { logout as apiLogout } from '../app/api/auth/logout/route';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); // Usamos el enrutador de navegación

  // Función para manejar el inicio de sesión
  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const data = await apiLogin(username, password);
      setUser(data);
      setIsLoading(false);
      router.push('/'); // Redirigimos al usuario a la página principal después del login exitoso
    } catch (err) {
      setError({ message: err.message });
      setIsLoading(false);
    }
  };

  // Función para manejar el cierre de sesión
  const logout = async () => {
    setIsLoading(true);
    try {
      await apiLogout();
      setUser(null); // Remueve el usuario del estado
      setIsLoading(false);
      router.push('/login'); // Redirigimos al usuario a la página de login después del logout
    } catch (err) {
      setError({ message: err.message });
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
