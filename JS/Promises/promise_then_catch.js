

name = 'ishan';

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        name.charAt(0) == 'z' ? resolve('yes') : reject(45);

    }, 2000);
})
let p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     name.charAt(0) == 'z' ? resolve('yes') : reject(45);

    // }, 2000);

    // resolve('yes');
    reject('No');

})

p.then((res) => {
    console.log(res);
}).catch((res)=>{
    console.log(res);
})
p1.then((res) => {
    console.log(res+'then block');
}).catch((res)=>{
    console.log(res+'catch block');
});


console.log(p, p1);

