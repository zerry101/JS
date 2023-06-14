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


// let promise_all=Promise.all([p1,p2,p3]);
// promise_all.then((res)=>{
//     console.log(res);
// })

// promise_all.catch((res)=>{
//     console.log(res);
// })


let promise_allSettled=Promise.allSettled([p1,p2,p3]);
promise_allSettled.then((res)=>{
    console.log(res);
})


let promise_race=Promise.race([p1,p2,p3]);
promise_race.then((res)=>{
    console.log(res);
})
