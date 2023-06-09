

name='ishan';

let p=new Promise((resolve,reject)=>{
    name.charAt(0)=='z'?resolve('yes'):reject('No');
})

p.then((res)=>{
console.log(res);
});


p.catch((res)=>{
console.log(res);
},console.error(Error))

console.log(p);