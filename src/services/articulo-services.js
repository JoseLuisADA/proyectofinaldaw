import ArticuloModel from '../models/articulo-modelo.js';
import SistaleError from '../utils/SistaleError.js';

export async function createArticulo(titulo, contenido, username, categoria) {
  const articulo = new ArticuloModel({
    titulo,
    contenido,
    username,
    categoria // Añadir categoría al crear el artículo
  });
  if (articulo.titulo === '' || articulo.contenido === '' || articulo.username === '' || articulo.categoria === '') {
    throw SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos');
  }
  await articulo.save();
  return articulo;
}

export async function getArticuloById(id) {
  const articulo = await ArticuloModel.findById(id);
  if (!articulo) throw SistaleError.badRequest('Artículo no encontrado');
  return articulo;
}

export async function updateArticulo(id, titulo, contenido) {
  const fecha = new Date();
  const articulo = await ArticuloModel.findByIdAndUpdate(id, { titulo, contenido, fecha }, { new: true });
  if (!articulo) throw SistaleError.badRequest('Artículo no encontrado');
  return articulo;
}

export async function deleteArticulo(id) {
  const articulo = await ArticuloModel.findByIdAndDelete(id);
  if (!articulo) throw SistaleError.badRequest('Artículo no encontrado');
  return articulo;
}

export async function listArticulos(page, size, categoria) {
  const query = categoria ? { categoria } : {};
  const articulos = await ArticuloModel.find(query)
    .sort({ fecha: -1 })
    .limit(size)
    .skip(size * (page - 1));
  const total = await ArticuloModel.countDocuments(query);
  return { total, articulos };
}
