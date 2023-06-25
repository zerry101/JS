async function fun56() {

    let p = new Promise((resolve, reject) => {
        resolve(909);
    })

    return p;
}


let output = fun56();
console.log('output here');
console.log(output);
output.then((data) => {
    console.log(data);
})



try {
    // key;

    throw new Error('invalid');
} catch (err) {
    // console.log(err);
    console.log(err.stack);
}



class A {

    constructor(name, age, rollNo) {
        this._name = name;
        this._age = age;
        this._rollNo = rollNo;
    }

    displayRollNo() {
        console.log(this.rollNo);
    }

    displayAge() {
        console.log(this.age);
    }

    displayName() {
        console.log(this.name);
    }



}

console.log("--objects&classes---");
obj = new A('zishan', 20, 95);
obj.displayAge();
obj.displayName();
obj.displayRollNo();

class B extends A {

    static run() {
        console.log(`running`);
    }

    constructor(address, ...args) {
        super(...args);
        this.address = address;
    }


    //method overriding
    displayAge() {
        console.log(`the age of  ${this._name} is  ${this._age} `);
    }

    displayAddress() {
        console.log(this.address);
    }

    get objName() {
        return this._name;
    }

    set newName(newName) {
        this._name = newName;
    }
}

B.run();

obj2 = new B("Ahmedabad", 'harry', 23, 98);
obj2.displayAddress();
obj2.displayAge();
obj2.displayRollNo();
obj2.displayName();

class Z {

}

console.log(obj2 instanceof A);

console.log(obj);
console.log(obj.address);
obj.__proto__ = obj2;
console.log(obj);
console.log(obj.address);
console.log('the name is' + obj2.objName);
obj2.newName = 'daze';
console.log('the name is' + obj2.objName);
console.log(obj2.__proto__);
console.log(obj.__proto__);

const obj5 = { a: 1, b: 2 };
const { a, b } = obj5;

console.log(a);

const arr10 = [1, 7, 11];
const arr20 = [...arr10];
console.log(arr20);
(() => {
    console.log('automatic');
})();

[x, y, ...rest] = [10, 20, 30, 40, 50];
console.log(x);
console.log(y);
console.log(rest);


const fetch = require("node-fetch");


let response = fetch('https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders',{method:"get"});
let response1 = fetch('https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders',{method:"post"});
response1.then((res)=>{
    console.log(res);
})
response.then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
});