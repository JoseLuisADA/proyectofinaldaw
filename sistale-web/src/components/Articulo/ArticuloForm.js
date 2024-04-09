// src/components/Articulo/ArticuloForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ArticuloForm = ({ articuloInicial, onSubmit }) => {
    const [articulo, setArticulo] = useState(articuloInicial || { titulo: '', contenido: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticulo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(articulo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={articulo.titulo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="contenido">Contenido</label>
                <textarea
                    id="contenido"
                    name="contenido"
                    value={articulo.contenido}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};

ArticuloForm.propTypes = {
    articuloInicial: PropTypes.object, // Add this prop type
    onSubmit: PropTypes.func.isRequired // Add this prop type
};

export default ArticuloForm;
