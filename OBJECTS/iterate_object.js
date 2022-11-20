const person = {
  name: "zishan",
  age: 22,
  hobbies: ["guitar", "sleeping"],
};

//   for in loop
// Object.keys
for (let key in person) {
  console.log(person[key]);
  // above process key as a variable and its value say for first iteration it is name for key variable value

//   console.log(person.key);

  // above will process key as a key name key in object person say for first iteration it will not get key named key in object person so it will return undefined  
  
}

for(let key in person)
{
    console.log(`\n\t${key}:${person[key]}`);
}

