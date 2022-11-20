const person = {
    name: "zishan",
    age: 22,
    hobbies: ["guitar", "sleeping"] 
  };

//   console.log(Object.keys(person));
console.log(person[Object.keys(person)[2]]);
console.log(Object.values(person)[0]);
console.log(Object.keys(person)[0]);


for(let key of Object.keys(person))
{
    console.log(person[key]);
}
