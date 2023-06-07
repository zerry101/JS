let num = [1, 2, 3, 4, 5, 6];
let b = num.toString();  //converts an array in string
console.log(b);
console.log(typeof (b));

c = num.join("_");//joins with joiner element
console.log(c);


r = num.pop();//pop returns the popped element and changes the same array 
console.log(num);
console.log(r);


v = num.push(56); //pushes the the element in array and returns the lenght of array
console.log(num);
console.log(v);


let g = num.shift(); //removes and returns starting element  from  original array 
console.log(g);
console.log(num);

let u = num.unshift(45); // adds elemnt from starting of array and returns the length of it
console.log(u);
console.log(num);

console.log(num.length);
delete num[0];//note delete  method deletes the array element from array but doesnot affects the array length
console.log(num);
console.log(num.length);


let newarray = num.concat([34, 67, 32, 31]); //concat doesnot works on same array instead it gives new array and merges the given array
console.log(newarray);


console.log(num);
num.sort();//it sorts alphabetically
console.log(num);

function compare1(a, b) {
    console.log(b - a);
    console.log(a);
    console.log(b);
    return b - a
}
num.sort(compare1);

//a-b ==>+1==>ascending ,b-a==>-1==>descending
console.log(num);
num.sort(compare1).reverse();
console.log(num);

// splie


let p = num.splice(2, 3, 45, 67);//splice  returnn removed element from given index and modified same array with given elements
console.log(num);
console.log(p);
let p3 = num.splice(2, 2);//splice  returnn removed element from given index and modified same array with given elements
console.log(num);

let p1 = num.slice(1, 3);//returns the deleted values
console.log(num);
console.log(p1);


let arr1 = [1, 2, 3, 4];
let arr2 = [4, 3, 2, 1];


function compare2(a, b) {
    console.log(a+"is a ");
    console.log(b+"is b");
    console.log(b-a+"is difference"); 
    return b-a;
}

// a-b ascending
// b-a descending

console.log(arr1.sort(compare2).reverse());  
console.log(arr2.sort(compare2));  


console.log("this is slice ");
console.log(arr1.slice(3));//returns element from third index to end   
console.log(arr1.slice(1,3));//gives element from zeroth zeroth index to second index 