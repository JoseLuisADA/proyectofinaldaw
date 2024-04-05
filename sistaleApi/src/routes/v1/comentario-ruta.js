// src/routes/v1/comentario-ruta.js
import express from 'express';
import * as comentarioControlador from '../../controllers/comentario-controlador.js';
import { authMiddleware } from '../../middlewares/auth-middleware.js';
import * as articuloComentarioMiddleware from '../../middlewares/articulo-comentario-middleware.js';

const router = express.Router();

router.post('/v1/comentario', authMiddleware, articuloComentarioMiddleware.validateCreateComentario, comentarioControlador.create);
router.get('/v1/comentario/:idComentario', articuloComentarioMiddleware.validateGetAndDel, comentarioControlador.get);
router.patch('/v1/comentario/:idComentario', authMiddleware, articuloComentarioMiddleware.validateUpdateComentario, comentarioControlador.update);
router.delete('/v1/comentario/:idComentario', authMiddleware, articuloComentarioMiddleware.validateGetAndDel, comentarioControlador.del);
router.get('/v1/comentarios', comentarioControlador.list);

export default router;
