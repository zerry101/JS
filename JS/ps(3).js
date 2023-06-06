// Q1
const obj={
    harry:23,
    rohan:45,
    joe:67
}

for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log(Object.keys(obj)[i]);
}

b=Object.values(obj);

console.log(...b);

// Q2

for( let  x in obj)
{
    console.log(`the marks of ${x} are ${obj[x]}`);
}


// q5

x=[23,45,67,78,89,90];

let sum=0;
let avg=0;
function average(){
    for(let i in x){
        sum+=i;
    }
    avg=sum/x.length;

    return avg;
}

console.log("average is "+average());
