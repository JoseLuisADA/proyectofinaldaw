import express from 'express';
import * as articuloControlador from '../../controllers/articulo-controlador.js';


const router = express.Router();

router.get('/', articuloControlador.list);
router.get('/:nombreArchivo', articuloControlador.get);
router.post('/', articuloControlador.create);
router.patch('/:nombreArchivo', articuloControlador.update);
router.delete('/:nombreArchivo', articuloControlador.del);

export default router;
