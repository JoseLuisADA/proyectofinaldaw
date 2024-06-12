// src/controllers/auth-controller.js
import * as AuthService from '../services/auth-services.js';
import SistaleError from '../utils/SistaleError.js';
import CuentaModel from '../models/cuenta-modelo.js';
import isValidEmail from '../utils/validateEmail.js';
import jwt from 'jsonwebtoken';

export async function register(req, res, next) {
  try {
    const { username, password, email } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await CuentaModel.findOne({ username });
    if (existingUser) {
      throw SistaleError.conflict('El usuario ya está creado');
    }

    // Validar los campos de entrada
    if (!username || !password || !email) {
      throw SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos');
    } else if (password.length < 1) {
      throw SistaleError.badRequest('La contraseña debe tener al menos 1 caracter');
    } else if (username.length < 1) {
      throw SistaleError.badRequest('El nombre de usuario debe tener al menos 1 caracter');
    } else if (!isValidEmail(email)) {
      throw SistaleError.badRequest('El email no es válido');
    }

    // Registrar el usuario
    await AuthService.register(username, password, email);
    res.status(201).json({ message: 'Cuenta creada' });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    if (!token) throw SistaleError.unauthorized('Credenciales inválidas');
    
    // Configura la cookie segura con el token
    res.cookie('sistale', token, { // Aquí 'session' es el nombre de la cookie y 'token' el valor
      httpOnly: true, // La cookie no es accesible vía JavaScript en el cliente
      secure: true,
      maxAge: 3600000, // 1 hora
      sameSite: 'Lax' // Asegúrate de que sameSite está configurado
    });
    res.status(200).json({ message: 'Se ha realizado login con éxito' });
  } catch (error) {
    next(error);
  }
}

export async function resetPassword(req, res, next) {
  try {
    
    const { newPassword } = req.body;
    const { username } = req.user;

    if (!newPassword) {
      throw SistaleError.badRequest('Asegúrate de que todos los campos estén rellenos');
    } else if (newPassword.length < 1) {
      throw SistaleError.badRequest('La nueva contraseña debe tener al menos 1 caracter');
    }

    await AuthService.changePassword(username, newPassword);
    res.status(200).json({ message: 'Contraseña cambiada con éxito' });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
}

export async function recoveryPassword(req, res, next) {
  try {
    const { newPassword } = req.body;
    const { username } = req.user;

    await AuthService.recoveryPassword(username, newPassword);
    res.status(200).json({ message: 'Contraseña cambiada con éxito' });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
}

export async function changePassword(req, res, next) {
  try {
    const { newPassword, oldPassword } = req.body;
    const { username } = req.user;

    await AuthService.changePassword(username, oldPassword, newPassword);
    res.status(200).json({ message: 'Contraseña cambiada con éxito' });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
}


export async function sendPasswordRecoveryEmail(req, res, next) {
  try {
    const { username } = req.body;

    if (!username) {
      throw SistaleError.badRequest('El campo de usuario no puede estar vacío');
    }

    // Find the user entity based on the username and retrieve the associated email
    const user = await CuentaModel.findOne({ username });
    if (!user) {
      throw SistaleError.notFound('Usuario no encontrado');
    }
    const email = user.email;

    // Generate a unique token for the password recovery request
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the password recovery email with the token included in the link
    await AuthService.sendPasswordRecoveryEmail(token, email);
    res.status(200).json({ message: 'Correo de recuperación de contraseña enviado' });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
}

export async function getAllUsers(req, res, next) {
  try {
    const users = await AuthService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const { username } = req.params;
    await AuthService.deleteUser(username);
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    next(error);
  }
}

export async function updateUserRole(req, res, next) {
  try {
    const { username } = req.params;
    const { newRole } = req.body;
    await AuthService.updateUserRole(username, newRole);
    res.status(200).json({ message: 'Rol de usuario actualizado con éxito' });
  } catch (error) {
    next(error);
  }
}
