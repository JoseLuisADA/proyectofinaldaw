// src/middlewares/checkAdminPermissions-middleware.js
import SistaleError from "../utils/SistaleError.js"
import CuentaModel from '../models/cuenta-modelo.js';

export async function checkMemberPermissions(req, res, next) {
  const { username } = req.user

  const user = await CuentaModel.findOne({ username })
  
  try {
    if (!user) throw SistaleError.unauthorized("No autorizado")
    if (user.role !== "miembro" && user.role !== "admin") throw SistaleError.unauthorized("No autorizado")
    next()
  }
  catch (error) {
    return res.status(401).json({ message: error.message });
  }
}
