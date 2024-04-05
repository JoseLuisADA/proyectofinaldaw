// src/loaders/index.js
import expressLoader from "./express-loader.js";
import connectDB from './db-loader.js';
import errorMiddleware from '../middlewares/error-middleware.js';

export async function init(server){
    await connectDB();
    expressLoader(server);
    server.use(errorMiddleware);
}
