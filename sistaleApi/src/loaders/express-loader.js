// src/loaders/express-loader.js
import express from 'express';
import cors from 'cors';
import router from '../routes/v1/index.js';
import errorMiddleware from '../middlewares/error-middleware.js';
import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../openapi/openapi.json' assert { type: "json" };

export default function(server){
    /* Config */
    const corsOptions = {
        origin: '*', // Permitir solicitudes desde este origen
        credentials: true, // Permitir el envío de cookies
    };
    server.use(cors(corsOptions));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true}));
    //server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    /* Routes */
    server.use(router);
    /* Error handler */ 
    server.use(errorMiddleware);
}
