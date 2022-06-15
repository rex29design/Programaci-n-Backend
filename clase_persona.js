class Persona {
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static usuarioSaludo = "Hola"

    saludoCompleto() {
        console.log(`Buenas noches, soy ${this.name} y tengo ${this.age} años`)
    }
    
    saludoEstatico() {
        console.log(Persona.usuarioSaludo)
    }

}

const p1 = new Persona("Natalia Moreno", 21);
const p2 = new Persona("Luis Mondragón", 35);

p1.saludoCompleto()
p2.saludoCompleto()


p1.saludoEstatico()