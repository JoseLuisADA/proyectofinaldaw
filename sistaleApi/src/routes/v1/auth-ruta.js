// src/routes/v1/auth-ruta.js
import express from 'express';
import * as authController from '../../controllers/auth-controlador.js';

const router = express.Router();

router.post('/v1/login', authController.login);
router.post('/v1/register', authController.register);

export default router;