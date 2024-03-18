// loaders/db-loader.js
import mongoose from 'mongoose';
import { MONGO_URI } from '../utils/config.js';

export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Conexión con la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1); // Terminar la aplicación con un código de error
    }
}
