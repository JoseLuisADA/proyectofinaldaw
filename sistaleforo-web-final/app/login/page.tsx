'use client';

import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Usar el enrutador de navegación de Next.js
import { AuthContext } from '../../components/AuthContext'; // Ajusta la ruta según la estructura de tu proyecto
import Link from 'next/link';

const LoginPage = () => {
  const { user, login, error, isLoading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Utilizamos el hook useRouter para manejar la redirección

  // Redirigir al usuario a la página principal si ya está autenticado
  useEffect(() => {
    if (user) {
      router.push('/'); // Redirigimos al usuario a la página principal si ya está logueado
    }
  }, [user, router]); // Dependemos de user y router para realizar la redirección

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(username, password); // Esperamos a que el login sea exitoso
    } catch (err) {
      console.error("Error durante el login:", err);
    }
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              { isLoading ? (
                  <i className="bx bx-loader bx-spin bx-sm">Cargando...</i>
                ) : (
                  'Entrar'
                )}
              </button>
            </div>
            {error && <p className="text-red-500 text-center font-bold italic">{error.message}</p>}
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
