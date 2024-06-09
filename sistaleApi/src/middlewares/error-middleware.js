// src/middlewares/error-middleware.js
import SistaleError from '../utils/SistaleError.js';

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof SistaleError) {
        res.status(err.status).json({ message: err.message });
    } else {
        console.error(err);
        res.status(500).json({ message: 'Ha ocurrido un error' });
    }
};

export default errorMiddleware;
