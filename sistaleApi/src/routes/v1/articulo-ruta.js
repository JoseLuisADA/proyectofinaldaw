// src/routes/v1/articulo-ruta.js
import express from 'express';
import * as articuloControlador from '../../controllers/articulo-controlador.js';
import { authMiddleware } from '../../middlewares/auth-middleware.js';
import * as articuloMiddleware from '../../middlewares/articulo-middleware.js';


const router = express.Router();

router.get('/v1/articulo', articuloControlador.list);
router.get('/v1/articulo/:idArticulo', articuloMiddleware.validateGetAndDel, articuloControlador.get);
router.post('/v1/articulo', authMiddleware, articuloMiddleware.validateCreate, articuloControlador.create);
router.patch('/v1/articulo/:idArticulo', authMiddleware, articuloMiddleware.validateUpdate, articuloControlador.update);
router.delete('/v1/articulo/:idArticulo', authMiddleware, articuloMiddleware.validateGetAndDel, articuloControlador.del);

export default router;
