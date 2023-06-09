promise=new Promise(function(resolve,reject){
    resolve(56);
    reject(45); 
})


setTimeout(()=>{
    console.log("hii");
},2000);
console.log("hello there");

console.log(promise);