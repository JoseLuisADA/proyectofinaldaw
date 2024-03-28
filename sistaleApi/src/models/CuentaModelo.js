import mongoose, { Schema } from 'mongoose';

const cuentaModelo = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
}, { collection: 'cuenta' });

export default mongoose.model('Cuenta', cuentaModelo);