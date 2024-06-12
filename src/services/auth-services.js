// src/services/auth-services.js
import CuentaModel from '../models/cuenta-modelo.js';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import SistaleError from '../utils/SistaleError.js';

dotenv.config(); // Esto carga las variables de entorno del archivo .env

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(username, password, email) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new CuentaModel({
    username,
    password: hashedPassword,
    email
  });
  await newUser.save();
}

export async function login(username, password) {

  const cuenta = await CuentaModel.findOne({ username });
  if (!cuenta) throw SistaleError.badRequest('Usuario o contraseña incorrecta')

  const isMatch = await bcrypt.compare(password, cuenta.password);
  if (!isMatch) throw SistaleError.badRequest('Usuario o contraseña incorrecta');

  const token = jwt.sign(
    { 
      username: cuenta.username,
      role: cuenta.role 
    }, 
    JWT_SECRET, 
    { expiresIn: '1h' });
  return token;
}

export async function resetPassword(username, newPassword) {
  const cuenta = await CuentaModel.findOne({ username });
  if (!cuenta) throw SistaleError.badRequest('Usuario no encontrado');
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  cuenta.password = hashedPassword;
  await cuenta.save();
}

export async function changePassword(username, oldPassword, newPassword) {

  if (!newPassword) throw SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos')
  if (newPassword.length < 1) throw SistaleError.badRequest('La nueva contraseña debe tener al menos 1 caracter')

  const cuenta = await CuentaModel.findOne({ username })
  if (!cuenta) throw SistaleError.unauthorized('Error al intentar cambiar la contraseña, trate de iniciar sesión nuevamente')

  const isMatch = await bcrypt.compare(oldPassword, cuenta.password)
  if (!isMatch) throw SistaleError.badRequest('La contraseña actual no es correcta')

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt)
  cuenta.password = hashedPassword
  await cuenta.save()
}

export async function sendPasswordRecoveryEmail(token, email) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.RECOVER_PASSWORD_EMAIL_SENDER_USER,
      pass: process.env.RECOVER_PASSWORD_EMAIL_SENDER__PASS,
    },
  });

  const mailOptions = {
    from: process.env.RECOVER_PASSWORD_EMAIL_SENDER_USER,
    to: email,
    subject: 'Sistale : Recuperación de contraseña',
    text: `Haz clic en el siguiente enlace para restablecer tu contraseña: \n \n
    
    ${process.env.CLIENT_URL}/reset-password/${token}`,
  };

  await transporter.sendMail(mailOptions);
}

export async function getAllUsers() {
  const users = await CuentaModel.find({}, 'username role email');
  if (!users) throw SistaleError.notFound('No hay usuarios registrados');
  return users;
}

export async function deleteUser(username) {
  const user = await CuentaModel.findOne({ username });
  if (!user) throw SistaleError.badRequest('Usuario no encontrado');
  await user.deleteOne();
}

export async function updateUserRole(username, role) {
  const user = await CuentaModel.findOne({ username });
  if (!user) throw SistaleError.badRequest('Usuario no encontrado');
  if (role !== 'admin' && role !== 'miembro') throw SistaleError.badRequest('Rol inválido');
  user.role = role;
  await user.save();
}