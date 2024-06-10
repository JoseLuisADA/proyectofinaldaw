// src/loaders/express-loader.js
import express from 'express';
import cors from 'cors';
import router from '../routes/v1/index.js';
import cookieParser from 'cookie-parser'
import errorMiddleware from '../middlewares/error-middleware.js';
import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../openapi/openapi.json' assert { type: "json" };

export default function(server){
    /* Config */

    /* CORS */

    /*const allowedOrigins = ['*', 'http://localhost:3000', 'http://localhost:4000']

    const corsOptions = {
        origin: function (origin, callback) {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true)
            } else {
                callback(new Error('No permitido por CORS'))
            }
        },
        credentials: true,
    }*/

    const corsOptions = {
        origin: true, // Permitir todas las solicitudes
        credentials: true,
    };
    
    /* SERVER USES */

    server.use(cors(corsOptions));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true}));
    server.use(cookieParser())
    //server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    /* Routes */
    server.use(router);
    
    /* Error handler */ 
    server.use(errorMiddleware);
}
