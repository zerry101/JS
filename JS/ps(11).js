
class Human {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} human is walking`);
    }
}

class Student extends Human {

    constructor(name) {
        super(name);
    }

    walk() {
        console.log(`${this.name} student is walking`);
    }
}

x=new Student('rohan');

x.walk();