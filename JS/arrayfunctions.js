const sayhello = () => {
    console.log('hello');
}

console.log(sayhello());


x = {
    name: "zishan",
    age: 21,
    show: function () {
        setTimeout(function () {
            //here we have used function in which this refers to window object
            console.log(`${this.name} is my name and ${this.age} is my age `);
        }, 0.5);
    }
    ,
    show1: function () {
        setTimeout( ()=> {
            //here we have used arrow function in which this refers to the current  object
            console.log(`${this.name} is my name and ${this.age} is my age `);
        }, 0.5);
    }
}

console.log(x.show());
console.log(x.show1());