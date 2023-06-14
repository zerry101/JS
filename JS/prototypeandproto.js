
// proptotype is a special property in js which is null or referes to an object
let a={
    name1:'rohan',
    age:23
}

console.log(a.name1.toString());


let p={
    run:()=>{
        console.log('run');
    }
}

p.__proto__={
    name:'zishan'
}

// if we want to have properties of one object into another object then we can use (.__propto__) to do this
a.__proto__=p 

a.run();
console.log(a.name);