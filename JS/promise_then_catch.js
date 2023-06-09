

name = 'zishan';

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        name.charAt(0) == 'z' ? resolve('yes') : reject(45);

    }, 2000);
})
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        name.charAt(0) == 'z' ? resolve('yes') : reject(45);

    }, 2000);
})

p.then((res) => {
    console.log(res);
});
p1.then((res) => {
    console.log(res);
});


p.catch((res) => {
    console.log(res);
}, console.error(Error))
p1.catch((res) => {
    console.log(res);
}, console.error(Error))

console.log(p, p1);

