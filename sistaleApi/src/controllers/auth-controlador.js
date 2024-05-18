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
     // Configura la cookie segura con el token
     res.cookie('session', token, { // Aquí 'session' es el nombre de la cookie y 'token' el valor
      httpOnly: true, // La cookie no es accesible vía JavaScript en el cliente
      secure: process.env.NODE_ENV === 'production', // En producción, asegúrate de usar HTTPS
      maxAge: 3600000, // 1 hora
    });
    res.status(200).json({ message: 'Login exitoso' } );
  } catch (error) {
    next(error);
  }
}
