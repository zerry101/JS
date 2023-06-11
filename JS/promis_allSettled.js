let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error('I am an error'))
    }, 2000);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(3);
    }, 3000);
});


// if any of them is rejected  then provides value of whose value is resolved 

let promise_allSettled=Promise.allSettled([p1,p2,p3]);
promise_allSettled.then((res)=>{
    console.log(res);
})