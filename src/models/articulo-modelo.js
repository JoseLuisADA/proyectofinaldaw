// src/models/articulo-modelo.js
import mongoose, { Schema } from 'mongoose';

const articuloModelo = new Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  username: { type: String, ref: 'Cuenta', required: true },
  categoria: { type: String, required: true },
}, { collection: 'articulo' });

export default mongoose.model('Articulo', articuloModelo);