import { z } from 'zod';

const userSchema = z.object({
    username: z.string().min(1, "El nombre de usuario es requerido."),
    password: z.string().min(1, "La contraseña debe tener al menos 1 caracter."),
    confirmPassword: z.string()
  }).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})

export default userSchema;