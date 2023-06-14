let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(2)
    }, 2000);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

// will provide value of promise whose value wiil be resolved first

let promise_race=Promise.race([p1,p2,p3]);

promise_race.then((res)=>{
    console.log(res);
})