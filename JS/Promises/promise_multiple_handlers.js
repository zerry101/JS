let p1=new Promise((resolve,reject)=>{
    true?resolve(100):reject(200);

});


p1.then((res)=>{
console.log("handler then  one "+res);
})

p1.then((res)=>{
console.log("handler then two "+res);
})

p1.then((res)=>{
console.log("handler then three"+res);
})

p1.catch((res)=>{
    console.log(res+'handler catch one');
})
p1.catch((res)=>{
    console.log(res+'handler catch two');
})
p1.catch((res)=>{
    console.log(res+'handler catch three');
})


