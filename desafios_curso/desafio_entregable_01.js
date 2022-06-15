class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }

    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota(misMascotas){
        this.mascotas.push(misMascotas);
    }

    countMascotas(){
        console.log(this.mascotas.length);
    }

    addBook(titulo, autor) {
        this.libros.push({nombre: "El viejo", por: "Ernest Hemingway"});
    }

    getBookNames() {
        const nombreLibros = [];
        for(const libro of this.libros){
            nombreLibros.push(libro.nombre)
            nombreLibros.push(libro.por)
        }
        console.log(nombreLibros);
    }
}

const usuario1 = new Usuario ("Regina", "Pérez");

usuario1.getFullName();

usuario1.addMascota("Perro");

usuario1.addMascota("Ave");

usuario1.addMascota("Murciélago")

usuario1.countMascotas();

usuario1.addBook({nombre:"El Viejo y el Mar", por: "Ernest Hemingway"});

usuario1.getBookNames();