// src/models/comentario-modelo.js
import mongoose, { Schema } from 'mongoose';

// Define el esquema de usuario
const comentarioModelo = new Schema({
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  username: { type: String, ref: 'Cuenta', required: true },
  idArticulo: { type: Schema.Types.ObjectId, ref: 'Articulo', required: true }
}, { collection: 'comentario' });


export default mongoose.model('Comentario', comentarioModelo);