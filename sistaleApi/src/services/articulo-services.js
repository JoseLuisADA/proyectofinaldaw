import mongoose from 'mongoose';
import articuloModelo from "../models/articuloModelo";


export function crearArticulo(idCuenta, titulo, contenido) {
    
    if(idCuenta && titulo && contenido){
        const nuevoArticulo = new Articulo({
            _idArticulo: new mongoose.Types.ObjectId(),
            titulo: titulo,
            contenido: titulo,
            // La fecha se asignará automáticamente al valor por defecto definido en el esquema
            idCuenta: idCuenta // Asegúrate de reemplazar esto con un ObjectId válido de una cuenta existente
        })
    }
}

export function leerNota(nombreArchivo) {
    const directorioNotas = path.join("./notas");
    const notaPath = path.join(directorioNotas, `${nombreArchivo}.note`);
    return fs.readFileSync(notaPath, "utf-8");
}

export function actualizarNota(nombreArchivo, contenido) {
    const filePath = path.join("./notas", `${nombreArchivo}.note`);  

    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, contenido);
    } else {
        throw Error;
    }
}

export function borrarNota(nombreArchivo) {
    const filePath = path.join("./notas", `${nombreArchivo}.note`);    

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    } else {
        throw Error;
    }

}

export function listarNotas() {
    const directorioNotas = path.resolve("./notas");
    const archivos = fs.readdirSync(directorioNotas);
    const notas = archivos.filter((file) => file.endsWith(".note"));
    return notas.length > 0 ? notas : "No hay notas creadas";
}
