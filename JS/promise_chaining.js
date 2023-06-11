


// let p1 = new Promise((resolve, reject) => {
//     resolve(56);

// })

// p1.then((res) => {
//     console.log(res);

//     p2 = new Promise((resolve, reject) => {
//         resolve("promise 2 is here");
//     });

//     return p2;

// }).then((data) => {
//     console.log(data);
// })



// hello = () => {
//     return 'hello';
// }

// hii = () => {
//     return 'hii';
// }

// greet = new Promise((resolve) => {
//     val1 = hello();
//     val2 = hii();
//     resolve(val1 + val2);
// });

// greet.then((res) => {

//     let p3 = new Promise((resolve) => {
//         val1 = hello();
//         val2 = hii();
//         resolve(res + val1 + val2);

//     })

//     return p3;

// }).then((data) => {

//     return new Promise((resolve, reject) => { reject(70) });
// }).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
//     return new Promise((resolve) => {
//         resolve(50);
//     }), new Promise((reject) => {
//         reject(60);
//     })

// }).then((data) => {
//     console.log(data + "kj");
//     return new Promise((resolve) => {
//         resolve(4454);
//     })
// }).catch((data) => {
//     console.log(data);

// }).then((data) => {
//     console.log(data);
// })


let promise13 = new Promise((resolve, reject) => {
let a=4,b=4;
let c=a+b;
 


c==8?resolve(c+" yes it is 8"):reject(c+'no it is not 8');
    // resolve(new Error('jkjk'));

})

promise13.then((res) => {
    console.log(res + "1st then");

    return new Promise((resolve,reject)=>{reject(78), resolve(res) ,reject(78);});
}).catch((res)=>{
    console.log(res+"1st catch");
    return new Promise((resolve,reject)=>{resolve(res) ;});
}).then((data)=>{
    console.log(data+'2nd then');
}).catch((data)=>{
    console.log(data+'2nd catch');
})

console.log(promise13);



// console.log(greet);
