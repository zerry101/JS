const array1= [1,2,3];
const array2=[4,5,6];

const arr=[...array1,array2];
console.log(arr);
// here array2 will be processed as an array element even if it is array
// ... spread an element consisting multiple elements refer below example 
const newarr=[..."abcdefgh"];
console.log(newarr);