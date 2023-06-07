const a=[1,2,3,4,5];

// map will return new array
// foreach  will return same array
maparr=a.map((data,)=>{
return data*2;
})

filterarr=a.filter((data,i)=>{
  return data>3;
})


reducearr=a.reduce((accumulator,element)=>{
    console.log(accumulator+"is accumulator");
    console.log(element+"is element");
    return accumulator+element;
})

console.log(maparr);
console.log(filterarr);
console.log(reducearr);

