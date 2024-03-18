// Importa el módulo mongoose
import { Schema } from 'mongoose';

// Define el esquema de usuario
const cuentaModelo = new Schema({
  _idCuenta: { type: Schema.Types.ObjectId, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { primaryKey: '_idCuenta' });

export default mongoose.model('Cuenta', cuentaModelo);