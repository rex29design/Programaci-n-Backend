const fs = require("fs") //Para importar la librería

// Lectura de archivos:
const data = fs.readFileSync("./data.txt", "utf-8") // "./" es la ruta relativa
console.log(data)

//Crear archivos:
fs.writeFileSync("./new.txt", "Saludos a Martin De Souza \n") //el /n es salto de línea

//Agregar contenido
fs.appendFileSync("./new.txt", "Más saludos a todos \n")

//Borrar un archivo
fs.unlinkSync("./new.txt")