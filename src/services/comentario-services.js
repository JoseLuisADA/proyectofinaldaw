// src/services/comentario-services.js
import ComentarioModel from '../models/comentario-modelo.js';
import SistaleError from '../utils/SistaleError.js';

export async function createComentario(contenido, username, idArticulo) {
  const comentario = new ComentarioModel({ contenido, username, idArticulo });
  await comentario.save();
  return comentario;
}

export async function getComentarioById(id) {
   const comentario = await ComentarioModel.findById(id);
   if (!comentario) throw SistaleError.badRequest('Comentario no encontrado');
   return comentario;
}

export async function updateComentario(id, contenido) {
  const comentario = await ComentarioModel.findByIdAndUpdate(id, { contenido }, { new: true });
  if (!comentario) throw SistaleError.badRequest('Comentario no encontrado');
  return comentario;
}

export async function deleteComentario(id) {
  const comentario = await ComentarioModel.findByIdAndDelete(id);
  if (!comentario) throw SistaleError.badRequest('Comentario no encontrado');
  return true;
}

export async function listComentariosPorArticulo(idArticulo) {
  const comentarios = await ComentarioModel.find({ idArticulo })
    .sort({ fecha: -1 });
  if (!comentarios) throw SistaleError.badRequest('No hay comentarios para este artículo');
  return comentarios;
}
