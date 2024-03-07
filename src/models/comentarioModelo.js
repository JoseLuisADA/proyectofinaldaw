// Importa el módulo mongoose
import { Schema } from 'mongoose';

// Define el esquema de usuario
const comentarioModelo = new Schema({
  _idComentario: { type: Number, required: true, unique: true },
  contenido: { type: String, required: true, unique: true },
  fecha: { type: Date, default: Date.now },
  idCuenta: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' },
}, { primaryKey: '_idComentario' });

export default mongoose.model('Comentario', comentarioModelo);