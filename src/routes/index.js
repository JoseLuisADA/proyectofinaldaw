import express from 'express';
import articuloRouter from './articuloRutas.js';
import authRoutes from './authRutas.js';
import { authenticateToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.use('/login', authRoutes);
router.use('/notas',  authenticateToken, notasRouter);

export default router;
