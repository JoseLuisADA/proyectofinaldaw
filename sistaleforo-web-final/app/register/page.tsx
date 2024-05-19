'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../components/AuthContext';
import userSchema from '../lib/userSchema';

const SignUpPage = () => {
  const { register, error, isLoading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const result = userSchema.safeParse({ username, password, confirmPassword });

    if (!result.success) {
      setValidationError(result.error.issues.map(issue => issue.message).join(", "));
      return;
    }

    setValidationError('');

    try {
      const msg = await register(username, password);
      router.push('/login'); // Redirige al usuario a la página de inicio de sesión después del registro exitoso
    } catch (err) {
    }
  };

  return (
    <div className="w-full h-full">
      <h2 className='text-center'>Registro</h2>
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
          <p className="text-gray-600 text-xs italic">Debe ser único y contener al menos 1 carácter.</p>
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
          <p className="text-gray-600 text-xs italic">Debe tener al menos 1 caracter.</p>
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
          <p className="text-gray-600 text-xs italic">Debe coincidir con la contraseña.</p>
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
