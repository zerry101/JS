

arr1=[45,54,46];
// arr2=arr1;//will show 30 value pusehd after pushing it  
arr2=[...arr1];//will not show 30 value pusehd after pushing it  
arr1.push(30);

console.log(arr2);
console.log(arr1);


// concartination
arr4=[10,20,30];
arr5=[40,50];
arr6=[...arr4,...arr5];
console.log(arr6);
// console.log(sum('fdf','dfd',...args1));


obj1={
    name:'zishan'
}

obj2={
    course:'btech',
    age:21
}

obj3={...obj1,...obj2};
console.log(obj3);