// src/services/auth-services.js
import CuentaModel from '../models/cuenta-modelo.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Esto carga las variables de entorno del archivo .env

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(username, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new CuentaModel({
    username,
    password: hashedPassword
  });
  await newUser.save();
}

export async function login(username, password) {
  let token;

  const cuenta = await CuentaModel.findOne({ username });
  if (!cuenta) return token;

  const isMatch = await bcrypt.compare(password, cuenta.password);
  if (!isMatch) return token;

  token = jwt.sign({ username: cuenta.username }, JWT_SECRET, { expiresIn: '1h' });
  return token;
}
