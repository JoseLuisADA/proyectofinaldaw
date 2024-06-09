// src/routes/v1/auth-ruta.js
import express from 'express';
import * as authController from '../../controllers/auth-controlador.js';
import { authMiddleware } from '../../middlewares/auth-middleware.js';
import { checkAdminPermissions } from '../../middlewares/checkAdminPermissions-middleware.js';

const router = express.Router();

router.post('/v1/login', authController.login);
router.post('/v1/register', authController.register);
router.put('/v1/change-password', authMiddleware, authController.changePassword);
router.put('/v1/reset-password', authMiddleware, authController.resetPassword);
router.post('/v1/recover-password', authController.sendPasswordRecoveryEmail);
router.get('/v1/users', authMiddleware, checkAdminPermissions, authController.getAllUsers);
router.delete('/v1/user/:username', authMiddleware, checkAdminPermissions, authController.deleteUser);
router.patch('/v1/:username/role', authMiddleware, checkAdminPermissions, authController.updateUserRole);

export default router;