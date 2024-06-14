// src/controllers/auth-controller.js
import * as AuthService from '../services/auth-services.js';

export async function register(req, res, next) {
  try {
    const { username, password, email } = req.body;
    await AuthService.register(username, password, email);
    res.status(201).json({ message: 'Cuenta creada' });
  } catch (error) {
    console.log(error)
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    
    res.cookie('sistale', token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
      sameSite: 'Lax'
    });
    res.status(200).json({ message: 'Se ha realizado login con éxito', token: token });
  } catch (error) {
    next(error);
  }
}

export async function resetPassword(req, res, next) {
  try {
    const { newPassword } = req.body;
    const { username } = req.user;
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
    await AuthService.sendPasswordRecoveryEmail(username);
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
    console.log(username)
    await AuthService.deleteUser(username);
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.log(error)
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
