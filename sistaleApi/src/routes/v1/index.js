import express from 'express';
import authRouter from '../../routes/v1/authRutas.js';
import articuloRouter from '../../routes/v1/articuloRutas.js'
const router = express.Router();

router.use(authRouter);
router.use(articuloRouter);

export default router;
