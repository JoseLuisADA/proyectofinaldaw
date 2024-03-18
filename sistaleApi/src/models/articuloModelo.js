import { Schema } from 'mongoose';

const articuloModelo = new Schema({
  _idArticulo: { type: Schema.Types.ObjectId, required: true, unique: true },
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  idCuenta: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' },
}, { primaryKey: '_idArticulo' });

export default mongoose.model('Articulo', articuloModelo);