// src/controllers/articulo-controlador.js
import * as ArticuloService from '../services/articulo-services.js';
import SistaleError from '../utils/SistaleError.js';

export async function create(req, res, next) {
  try {
    const { titulo, contenido } = req.body;
    const username = req.user.username;
    const articulo = await ArticuloService.createArticulo(titulo, contenido, username);
    res.status(201).json(articulo);
  } catch (error) {
    next(error);
  }
}

export async function get(req, res, next) {
  try {
    const { idArticulo } = req.params;
    const articulo = await ArticuloService.getArticuloById(idArticulo);
    if (!articulo) {
      throw SistaleError.notFound('Artículo no encontrado');
    }
    res.status(200).json(articulo);
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const { idArticulo } = req.params;
    const { titulo, contenido } = req.body;
    const articulo = await ArticuloService.updateArticulo(idArticulo, titulo, contenido);
    if (!articulo) {
      throw SistaleError.notFound('Artículo no encontrado para actualizar');
    }
    res.status(200).json(articulo);
  } catch (error) {
    next(error);
  }
}

export async function del(req, res, next) {
  try {
    const { idArticulo } = req.params;
    await ArticuloService.deleteArticulo(idArticulo);
    res.status(200).json({ Mensaje: 'Artículo eliminado exitosamente' });
  } catch (error) {
    next(error);
  }
}

export async function list(req, res, next) {
  try {
    const { page = 1, size = 10 } = req.query;
    const { total, articulos } = await ArticuloService.listArticulos(parseInt(page), parseInt(size));
    res.status(200).json({ total, articulos });
  } catch (error) {
    next(error);
  }
}