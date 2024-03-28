import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default async function connectDB() {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Conexión con la base de datos establecida');
  } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
      process.exit(1); // Terminar la aplicación con un código de error
  }
}
