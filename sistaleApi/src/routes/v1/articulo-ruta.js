// src/routes/v1/articulo-ruta.js
import express from 'express';
import * as articuloControlador from '../../controllers/articulo-controlador.js';
import { authMiddleware } from '../../middlewares/auth-middleware.js';


const router = express.Router();

router.get('/v1/articulo', articuloControlador.list);
router.get('/v1/articulo/:idArticulo', articuloControlador.get);
router.post('/v1/articulo', authMiddleware, articuloControlador.create);
router.patch('/v1/articulo/:idArticulo', authMiddleware, articuloControlador.update);
router.delete('/v1/articulo/:idArticulo', authMiddleware, articuloControlador.del);

export default router;
