// src/models/cuenta-modelo.js
import mongoose, { Schema } from 'mongoose';

const cuentaModelo = new Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
}, { collection: 'cuenta' });

export default mongoose.model('Cuenta', cuentaModelo);