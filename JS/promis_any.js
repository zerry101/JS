let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error('I am an error'))
    }, 200);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

// will provide value of promise whose value wiil be resolved first only


let promise_any=Promise.any([p1,p2,p3]);

promise_any.then((res)=>{
    console.log(res);
})

