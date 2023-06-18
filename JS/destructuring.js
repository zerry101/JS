// destructuring array

let arr =[3,5,2,5,6,7,8,10,11,12,13,15];
 let arr1=[];
let [a,b,...rest]=arr;
console.log([a,b]);
console.log(rest);
// destructruring objects

console.log("---destructuring objects---");

let {x,y,rest1}={x:1,y:5,rest1:{...arr}};
let obj1={...arr};

console.log(x,y,rest1);
console.log(obj1);


sum=(v1,v2,v3)=>{
    console.log("this is sum");
    console.log(v1);
    console.log(v2);
    console.log(v3);
return v1+v2+v3;
}

console.log(sum(...arr));

let obj2={
    name:"harry",
    company:"xtz Pvt. Ltd.",
    age:25
}


console.log({...obj2,company:"xyz Pvt. Ltd."});


let obj3=[{...obj2},{...obj2}]


let obj4=obj3.map((data)=>{

    return {...data,role:"developer"}
})

console.log(obj3);
console.log(obj4);
