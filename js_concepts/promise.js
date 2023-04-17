let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("I am a promise i am fulfilled");
        // resolve(true);
        reject('hi');
        resolve('no');

    }, 5000);
})
let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("I am a promise i am fulfilled");
        // resolve(true);
        resolve('hi i am second');

    }, 5000);
})



// console.log(p1); 
// console.log(p2);
p1.catch((value)=>{console.log(value); console.log(p1);}); 
p1.then((value)=>{console.log(value); console.log(p1);}); 
p2.then((value)=>{console.log(value); console.log(p2);})