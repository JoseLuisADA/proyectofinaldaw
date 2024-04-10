import React, { useEffect, useState } from 'react';
import { obtenerArticulos } from '../../api/articulosApi.js';

const Articulos = () => {
  const [articulosData, setArticulosData] = useState({
    total: 0,
    articulos: []
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fetchArticulos = async () => {
        try {
          const data = await obtenerArticulos();
          setArticulosData(data);
        } catch (error) {
          console.error('Error al obtener los artículos:', error);
        }
      };
      fetchArticulos();
    }
  }, []);

  return (
    <div>
        <h1>Artículos ({articulosData.total})</h1>
        {articulosData.articulos.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            <hr/>
            {articulosData.articulos.map(articulo => (
              <div key={articulo._id}>
                <h2>{articulo.titulo}</h2>
                <h4>{articulo.username}</h4>
                <p>{articulo.contenido}</p>
              </div>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Articulos;
