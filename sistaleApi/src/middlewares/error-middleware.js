// src/middlewares/error-middleware.js
import SistaleError from '../utils/SistaleError.js';

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof SistaleError) {
        res.status(err.status).json({ Mensaje: err.message });
    } else {
        console.error(err);
        res.status(500).json({ Mensaje: 'Ha ocurrido un error' });
    }
};

export default errorMiddleware;
