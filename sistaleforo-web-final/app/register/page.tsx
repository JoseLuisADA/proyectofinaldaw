'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation'; // Usar el enrutador de navegación de Next.js
import { AuthContext } from '../../components/AuthContext'; // Ajusta la ruta según la estructura de tu proyecto

const SignUpPage = () => {
  const { error, isLoading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setValidationError('Las contraseñas no coinciden');
      return;
    }
    setValidationError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push('/login'); // Redirige al usuario a la página de inicio de sesión después del registro exitoso
      } else {
        const errorData = await response.json();
        setValidationError(errorData.message || 'Error al crear la cuenta');
      }
    } catch (err) {
      setValidationError('Error durante el registro');
    }
  };

  return (
    <div className="w-full h-full">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignUp}>
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
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirmar Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="*******"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            {isLoading ? (
              <i className="bx bx-loader bx-spin bx-sm">Cargando...</i>
            ) : (
              'Registrarse'
            )}
          </button>
        </div>
        {validationError && <p className="text-red-500 text-center font-bold italic">{validationError}</p>}
        {error && <p className="text-red-500 text-center font-bold italic">{error.message}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
