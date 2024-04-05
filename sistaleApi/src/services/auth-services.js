// src/services/auth-services.js
import CuentaModel from '../models/cuenta-modelo.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Esto carga las variables de entorno del archivo .env

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(username, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new CuentaModel({
    username,
    email,
    password: hashedPassword
  });
  await newUser.save();
}

export async function login(username, password) {
  const user = await CuentaModel.findOne({ username });
  if (!user) throw new Error('Usuario o contraseña incorrecta');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Usuario o contraseña incorrecta');

  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  return token;
}
