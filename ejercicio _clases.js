class Person {
    constructor(name) {

        this.name = name;

    }
}

class Employee extends Person {
    constructor(name) {
        super(name);
    }

    info() {
        console.log(`The Employee name is: ${this.name}`);
    }
}

let epl = new Employee ("Krunal");

epl.info();