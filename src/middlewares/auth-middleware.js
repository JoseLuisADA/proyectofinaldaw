// src/middlewares/auth-middleware.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (req, res, next) => {
  console.log("ENTRANDO EN AUTH MIDDLEWARE :")
  console.log("REQ HEADERS:")
  console.log(req.headers)
  console.log("REQ HEADERS AUTHORIZATION:")
  console.log(req.headers.authorization)
  // Obtener el token del encabezado de autorización
  const authHeader = req.headers.authorization;
  
  // Rechazar la petición si no hay un encabezado de autorización
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });
  }

  // Extraer el token del encabezado
  const token = authHeader.split(' ')[1];

  // Verificar el token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Agregar el payload del token al objeto req para su uso posterior
    next(); // Continuar con la siguiente función en el middleware/ruta
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
