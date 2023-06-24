str="hiiii";
str2="hi how are you"
str1=str.concat(" ","pdjkajkla");
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace('ii','rr'));
console.log(str.concat('Yes',"No","hkjhjkhj","klkljkjk"));
console.log(Array.from(str));
console.log(str1.trim());


let arr=[1,2,3,3,4,5,5,6];

arr[3]=45;

function sortCompare(a,b)
{
    return a-b;

}

compare=(a,b)=>{
return b-a;
}

console.log(arr);
console.log(arr.toString());
console.log(arr.join('-'));
console.log(arr.pop());
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.concat([10,11,12]));
delete arr[8]
console.log(arr);
let arr1=[1,2,3,3,4,5,5,6];
console.log(arr1.sort(compare));

let arr2=[1,2,3,4,5,6,7,8];
let squearedArr=arr2.map((data)=>{
    return data*data;
})

let evenArr=arr1.filter((data)=>{
    return data%2==0;
});

arr2.forEach((data)=>{
    console.log(data*3);
});

let total=arr2.reduce((data,accumulator)=>{
return accumulator+=data;
},accumulator=0)

console.log(squearedArr);
console.log(evenArr);
console.log('---foreach--below----');
console.log(total);