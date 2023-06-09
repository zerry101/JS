// q3
const arr=[10,33,40,56,78,32,20,11,110];

filteredarr=arr.filter((data)=>{
return data%10;
})

console.log(filteredarr);

// q4
squaredarray=arr.map((data)=>{
  return data*data;
})

console.log(squaredarray);

const elearr=[1,2,3,4,5,6,7,8,9,10];

newarr=elearr.slice(0,6); 

factarr=elearr.reduce((accumulator,element)=>{
    return accumulator*element;
})
console.log(factarr);
console.log(newarr);