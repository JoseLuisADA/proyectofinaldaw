// src/routes/v1/comentario-ruta.js
import express from 'express';
import * as articuloComentarioMiddleware from '../../middlewares/articulo-comentario-middleware.js';
import * as comentarioControlador from '../../controllers/comentario-controlador.js';
import { authMiddleware } from '../../middlewares/auth-middleware.js';
import { checkAdminPermissions } from '../../middlewares/checkAdminPermissions-middleware.js';
import { checkMemberPermissions } from '../../middlewares/checkMemberPermissions-middleware.js';

const router = express.Router();

router.post('/v1/comentario', authMiddleware, checkMemberPermissions, articuloComentarioMiddleware.validateCreateComentario, comentarioControlador.create);
router.get('/v1/comentario/:idComentario', articuloComentarioMiddleware.validateGetAndDelComentario, comentarioControlador.get);
router.patch('/v1/comentario/:idComentario', authMiddleware, checkAdminPermissions, articuloComentarioMiddleware.validateUpdateComentario, comentarioControlador.update);
router.delete('/v1/comentario/:idComentario', authMiddleware, checkAdminPermissions, articuloComentarioMiddleware.validateGetAndDelComentario, comentarioControlador.del);
router.get('/v1/comentarios/:idArticulo', articuloComentarioMiddleware.validateGetAndDelArticulo, comentarioControlador.list);

export default router;
