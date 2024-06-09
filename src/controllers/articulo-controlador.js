// src/controllers/articulo-controlador.js
import * as ArticuloService from '../services/articulo-services.js';

export async function create(req, res, next) {
  try { 
    const { titulo, contenido, username } = req.body;
    await ArticuloService.createArticulo(titulo, contenido, username);
    res.status(201).json({ message: 'Artículo creado exitosamente' });
  } catch (error) {
    next(error);
  }
}

export async function get(req, res, next) {
  try {
    const { idArticulo } = req.params;
    const articulo = await ArticuloService.getArticuloById(idArticulo);
    res.status(200).json(articulo);
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const { idArticulo } = req.params;
    const { titulo, contenido } = req.body;
    await ArticuloService.updateArticulo(idArticulo, titulo, contenido);
    res.status(200).json({ message: 'Artículo editado exitosamente' });
  } catch (error) {
    next(error);
  }
}

export async function del(req, res, next) {
  try {
    const { idArticulo } = req.params;
    await ArticuloService.deleteArticulo(idArticulo);
    res.status(200).json({ message: 'Artículo eliminado exitosamente' });
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