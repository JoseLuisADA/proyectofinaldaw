'use client';
import React, { useState } from 'react';
import useArticulos from '../hooks/useArticulos';
import { Articulo } from '../types/articulo';

const ArticulosList = () => {
  const [page, setPage] = useState(1);
  const { articulos, isLoading, error } = useArticulos(page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {isLoading && <p className='text-center'>Cargando artículos...</p>}
      {error && <p className="text-red-500 text-center font-bold italic">{error}</p>}
      {!isLoading && !error && (
        <>
          <ul>
            {articulos.map((articulo: Articulo) => (
              <li key={articulo._id} className="mb-4 p-4 border rounded shadow-sm">
                <h2 className="text-xl font-bold">{articulo.titulo}</h2>
                <p className="text-gray-700">{articulo.contenido}</p>
                <p className="text-sm text-gray-500">Por: {articulo.username}</p>
                <p className="text-sm text-gray-500">Fecha: {new Date(articulo.fecha).toLocaleString()}</p>
              </li>
            ))}
          </ul>
          <div className="pagination flex justify-between mt-4">
            <button onClick={handlePreviousPage} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded">
              Anterior
            </button>
            <span className="px-4 py-2">Página {page}</span>
            <button onClick={handleNextPage} disabled={articulos.length === 0} className="px-4 py-2 bg-blue-500 text-white rounded">
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticulosList;
