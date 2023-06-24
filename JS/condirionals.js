// let a=prompt("Hey whats your age?");

q="34rtrt"
x=Number.parseInt(q);


console.log(x);
console.log(typeof(x));


arr=[1,2,3,4,5,6,7,8,9,10];

sum=arr.reduce((accumulator,iterator)=>{
    console.log(iterator+"iterator");
    console.log(accumulator+"accumulator");
    return accumulator+=iterator;
});
console.log(sum);

for(key in arr){
    console.log(key);
}

for(val of arr){
    console.log(val);
}
