const fruits=["apple","banana","mango"];
for(let fruit of fruits){
    console.log(fruit);
}

console.log("<br>");
const [myvar1,myvar2,myvar3]=fruits;
console.log(myvar1);
console.log(myvar2);
console.log(myvar3);

console.log("br");
console.log(fruits.slice(2));