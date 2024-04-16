export const obtenerArticulos = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_SISTALE_API);
    const response = await fetch(`${process.env.NEXT_PUBLIC_SISTALE_API}/articulos`);
    if (!response.ok) {
      throw new Error('Error al obtener artículos');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener artículos');
  }
};

export const crearArticulo = async (articulo) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SISTALE_API}/articulo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articulo),
  });
  if (!response.ok) {
    throw new Error('Error al crear artículo');
  }
  return await response.json();
};

export const actualizarArticulo = async (articulo) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SISTALE_API}/${articulo._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articulo),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar artículo');
  }
  return await response.json();
};
