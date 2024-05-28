// sistaleforo-web-final/app/page.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ArticulosList from '../components/ArticulosLists';

function Index({ articulos }) {
  return <ArticulosList articulos={articulos} />;
}

// Aquí se define la validación de PropTypes para el componente Index
Index.propTypes = {
  articulos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    fecha: PropTypes.instanceOf(Date).isRequired,
    username: PropTypes.string.isRequired,
  })).isRequired,
};

export default Index;

// Configuración de getServerSideProps para obtener datos del servidor
export const getServerSideProps = async (context) => {
  const { req } = context;
  const username = req.headers['x-username'];
  const role = req.headers['x-role'];

  // Simulación de fetch para obtener los artículos, reemplázalo con tu llamada a la API
  const res = await fetch('https://tu-api.com/articulos');
  const articulos = await res.json();

  return {
    props: { articulos, username, role },
  };
};
