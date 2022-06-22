const fs = require("fs")

fs.appendFile("new.txt", "New data appended \n", error => {
    error ? console.log("Hubo un error") : console.log("Se agregó correctamente") //Otra forma rápida de if, else
})

console.log("FIN")