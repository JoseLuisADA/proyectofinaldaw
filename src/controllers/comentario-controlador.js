// src/controllers/comentario-controlador.js
import * as ComentarioService from '../services/comentario-services.js';
import SistaleError from '../utils/SistaleError.js';

export async function create(req, res, next) {
  try {

    const { contenido, idArticulo, username } = req.body;

    const comentario = await ComentarioService.createComentario(contenido, username, idArticulo)

    res.status(201).json(comentario)

  } catch (error) {
    next(error);
  }
}

export async function get(req, res, next) {
  try {
    const { idComentario } = req.params;
    const comentario = await ComentarioService.getComentarioById(idComentario);
    if (!comentario) {
      throw SistaleError.notFound('Comentario no encontrado');
    }
    res.status(200).json(comentario);
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const { idComentario } = req.params;
    const { contenido } = req.body;
    const comentario = await ComentarioService.updateComentario(idComentario, contenido);
    if (!comentario) {
      throw SistaleError.notFound('Comentario no encontrado para actualizar');
    }
    res.status(200).json(comentario);
  } catch (error) {
    next(error);
  }
}

export async function del(req, res, next) {
  console.log("ENTRANDO A DEL COMENTARIO")
  try {
    const { idComentario } = req.params;
    await ComentarioService.deleteComentario(idComentario);
    res.status(200).json({ Mensaje: 'Comentario eliminado exitosamente' });
  } catch (error) {
    next(error);
  }
}

export async function list(req, res, next) {
  try {
    const { idArticulo } = req.params;
    const comentarios = await ComentarioService.listComentariosPorArticulo(idArticulo);
    res.status(200).json(comentarios);
  } catch (error) {
    next(error);
  }
}
