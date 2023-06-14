class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running");
    }
    shout() {
        console.log(this.name + " is shouting");
    }


    eat(number) {
        this.number = number
        console.log(`this animal eats ${this.number} times `);
    }


}


class Monkey extends Animal {

// by default if we are not making any constructor in inherited class a constructor like below will be built by javascript engine on runtime 
    // constructor(...args) {
        // super(...args);
    // }


    consumption(number) {

        this.number = number
        super.eat(number);

        console.log(`average consumption is ${number / 2}`);
    }

}

y = new Monkey('ken', 'blue');
x = new Monkey('ken1', 'red');

console.log(y.color);
console.log(x.color);
console.log(x.run());
console.log(y.run());
console.log(x.consumption(5));
console.log(x.consumption(5));


