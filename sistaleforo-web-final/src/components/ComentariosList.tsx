// src/components/ComentariosList.tsx
'use client';
import React from 'react';
import useComentarios from '../hooks/useComentarios';
import { ComentarioProps } from '../types/comentarioProps';

interface ComentariosListProps {
  idArticulo: string;
}

const ComentariosList: React.FC<ComentariosListProps> = ({ idArticulo }) => {
  const { comentarios, isLoading } = useComentarios(idArticulo);

  return (
    <div>
      {isLoading && <p className='text-center'>Cargando comentarios...</p>}
      {!isLoading &&  (
        <ul>
          {comentarios.map((comentario: ComentarioProps) => (
            <li key={comentario._id} className="mb-4 p-4 border rounded shadow-sm">
              <p className="text-gray-700">{comentario.contenido}</p>
              <p className="text-sm text-gray-500">Por: {comentario.username}</p>
              <p className="text-sm text-gray-500">Fecha: {new Date(comentario.fecha).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComentariosList;
