
promise2=new Promise(function(resolve,reject){
    console.log("this is promise 2");
    resolve("hii there ");
})
;

promise=new Promise(function(resolve,reject){
    resolve(promise2);
    // reject(45); 
})



setTimeout(()=>{
    console.log("hii");
},2000);
console.log("hello there");

console.log(promise);