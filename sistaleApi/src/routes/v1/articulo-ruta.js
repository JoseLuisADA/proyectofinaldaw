// src/routes/v1/articulo-ruta.js
import express from 'express';
import * as articuloControlador from '../../controllers/articulo-controlador.js';
import * as articuloComentarioMiddleware from '../../middlewares/articulo-comentario-middleware.js';
import { authMiddleware } from '../../middlewares/auth-middleware.js';
import { checkAdminPermissions } from '../../middlewares/checkAdminPermissions-middleware.js';


const router = express.Router();

router.get('/v1/articulos', articuloControlador.list);
router.get('/v1/articulo/:idArticulo', articuloComentarioMiddleware.validateGetAndDelArticulo, articuloControlador.get);
router.post('/v1/articulo', authMiddleware, checkAdminPermissions, articuloComentarioMiddleware.validateCreateArticulo, articuloControlador.create);
router.patch('/v1/articulo/:idArticulo', authMiddleware, checkAdminPermissions, articuloComentarioMiddleware.validateUpdateArticulo, articuloControlador.update);
router.delete('/v1/articulo/:idArticulo', authMiddleware, checkAdminPermissions, articuloComentarioMiddleware.validateGetAndDelArticulo, articuloControlador.del);

export default router;
