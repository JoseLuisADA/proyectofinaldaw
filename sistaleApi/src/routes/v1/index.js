// src/routes/v1/index.js
import express from 'express';
import authRouter from './auth-ruta.js';
import articuloRouter from './articulo-ruta.js'
import comentarioRouter from './comentario-ruta.js'
const router = express.Router();

router.use(authRouter);
router.use(articuloRouter);
router.use(comentarioRouter);

export default router;
