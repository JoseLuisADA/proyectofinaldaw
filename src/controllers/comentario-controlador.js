// src/controllers/comentario-controlador.js
import * as ComentarioService from '../services/comentario-services.js';

export async function create(req, res, next) {
  try {
    const { contenido, idArticulo } = req.body;
    const { username } = req.user;
    await ComentarioService.createComentario(contenido, username, idArticulo)
    res.status(201).json({ message: 'Comentario creado exitosamente' })
  } catch (error) {
    next(error);
  }
}

export async function get(req, res, next) {
  try {
    const { idComentario } = req.params;
    await ComentarioService.getComentarioById(idComentario);
    res.status(200).json(comentario);
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const { idComentario } = req.params;
    const { contenido } = req.body;
    await ComentarioService.updateComentario(idComentario, contenido);
    res.status(200).json({ message: 'Comentario actualizado exitosamente' });
  } catch (error) {
    next(error);
  }
}

export async function del(req, res, next) {
  try {
    const { idComentario } = req.params;
    await ComentarioService.deleteComentario(idComentario);
    res.status(200).json({ message: 'Comentario eliminado exitosamente' });
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
