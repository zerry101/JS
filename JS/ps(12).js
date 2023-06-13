
// q1
sayhello=async()=>{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('hello');
        }, 200);
    })

    let response=await promise;

    return response;
}


sayhello().then((res)=>{
    console.log(res);
});


// q2 
sum=(a,b,c)=>{
console.log((a+b+c)/3);
}

numarr=[100,100,100];

console.log(sum(...numarr));

// 
((n)=>{

    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`promise is resolved in ${n} seconds `);
            
        }, n*1000);
    })

    promise.then((res)=>{
        console.log(res);
    })

})(.05); 