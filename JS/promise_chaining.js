


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


let p4 = new Promise((reject, resolve) => {


    // resolve(new Error('jkjk'));
    resolve(new Error('jkjk'));

})

p4.then((res) => {
    console.log(res + "then");
}).catch((reason) => {
    console.log(reason + "catch");
});

console.log(p4);



// console.log(greet);
