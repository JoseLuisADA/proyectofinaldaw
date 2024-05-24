'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useLogin from '../../hooks/useLogin'; // Ajusta la ruta al hook es correcta

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin(); // Utilizamos el hook useLogin
  const router = useRouter();

  useEffect(() => {
    const sessionToken = document.cookie.split('; ').find(row => row.startsWith('session='));
    if (sessionToken) {
      router.push('/'); // O la ruta que corresponda al dashboard del usuario
    }
  }, [router]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(username, password); // login ya maneja los errores internamente y actualiza el contexto del usuario
  };

  return (
    <div>
      <h2 className='text-center'>Iniciar sesión</h2>
      <div className="w-full h-full flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-1/2 p-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Entrar'}
              </button>
            </div>
            {error && <p className="text-red-500 text-center font-bold italic">{error}</p>}
          </form>
        </div>
        <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center items-center text-center bg-white shadow-md rounded">
          <h2 className="text-lg mb-4">¿Nuevo aquí?</h2>
          <p className="mb-6">Únete a nosotros hoy y explora más!</p>
          <Link href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
