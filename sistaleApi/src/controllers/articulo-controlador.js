// src/controllers/articulo-controlador.js
import * as ArticuloService from '../services/articulo-services.js';

export async function create(req, res) {
  try {
    const { titulo, contenido } = req.body;
    const username = req.user.username;
    console.log(username);
    const articulo = await ArticuloService.createArticulo(titulo, contenido, username);
    res.status(201).json(articulo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function get(req, res) {
  try {
    const { idArticulo } = req.params;
    const articulo = await ArticuloService.getArticuloById(idArticulo);
    res.status(200).json(articulo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { idArticulo } = req.params;
    const { titulo, contenido } = req.body;
    const articulo = await ArticuloService.updateArticulo(idArticulo, titulo, contenido);
    res.status(200).json(articulo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function del(req, res) {
  try {
    const { idArticulo } = req.params;
    await ArticuloService.deleteArticulo(idArticulo);
    res.status(200).json({ message: 'Artículo eliminado exitosamente' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function list(req, res) {
  try {
    const { page = 1, size = 10 } = req.query; // Valores por defecto
    const { total, articulos } = await ArticuloService.listArticulos(page, size);
    res.status(200).json({ total, articulos });
  } catch (error) {
    res.status(404).json({ Mensaje: "Error al cargar los articulos" });
  }
}
