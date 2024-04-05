// src/controllers/auth-controlador.js
import * as AuthService from '../services/auth-services.js';

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    await AuthService.register(username, email, password);
    res.status(200).json({Mensaje: "Cuenta creada"});
  } catch (error) {
    res.status(401).json({Mensaje: "Error al crear la cuenta"});
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

