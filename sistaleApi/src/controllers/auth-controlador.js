// src/controllers/auth-controlador.js
import * as AuthService from '../services/auth-services.js';
import SistaleError from '../utils/SistaleError.js';

export async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos');
    }
    await AuthService.register(username, email, password);
    res.status(200).json({ Mensaje: 'Cuenta creada' });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    if (!token) throw SistaleError.badRequest('Credenciales inválidas');
    res.status(200).json({ token } );
  } catch (error) {
    next(error);
  }
}
