// src/controllers/auth-controlador.js
import * as AuthService from '../services/auth-services.js';
import SistaleError from '../utils/SistaleError.js';

export async function register(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos');
    } else if (password.length < 1) {
      throw SistaleError.badRequest('La contraseña debe tener al menos 1 caracter');
    } else if (username.length < 1) {
      throw SistaleError.badRequest('El nombre de usuario debe tener al menos 1 caracter');
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
      secure: false,
      maxAge: 3600000, // 1 hora
      sameSite: 'Strict',
    });
    res.status(200).json({ message: 'Se ha realizado login con éxito' } );
  } catch (error) {
    next(error);
  }
}
