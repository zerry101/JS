let name="zishan"
arr=Array.from(name);
console.log(arr);

// FOREACH
num=['w','e','t','y'];
num.forEach((data)=>{
console.log(data);
})
    

// for of

// below will wrrite elements of num array
for(let i of num){
    console.log(i);
}

// below will wrrite index of num array
for(let i in num){
    console.log(i);
}

obj={
    name:"zishan",
    age:21,
    rollno:95

}

for (let key in obj){
    console.log(key);
}

arr=[1,2,3,4,5,];
for(let val of arr){
    console.log(val);
}

console.log(`Hii `);