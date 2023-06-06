let num =[1,2,3,4,5,6];
let b=num.toString();  //converts an array in string
console.log(b);
console.log(typeof(b));

c=num.join("_");//joins with joiner element
console.log(c);


r=num.pop();//pop returns the popped element and changes the same array 
console.log(num);
console.log(r);


 v=num.push(56); //pushes the the element in array and returns the lenght of array
console.log(num);
console.log(v);


let g=num.shift(); //removes and returns starting element  from  original array 
console.log(g);
console.log(num);

let u=num.unshift(45); // adds elemnt from starting of array and returns the length of it
console.log(u);
console.log(num);

console.log(num.length);
delete num[0];//note delete  method deletes the array element from array but doesnot affects the array length
console.log(num);
console.log(num.length);


let newarray=num.concat([34,67,32,31]); //concat doesnot works on same array instead it gives new array and merges the given array
console.log(newarray);