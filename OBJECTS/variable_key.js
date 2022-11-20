const person = {
  name: "zishan",
  age: 22,
  hobbies: ["guitar", "sleeping"],
};

const key = "email";

// person.key="xyz@gmail.com";
// above will replace value of key that is email by xyz@gmail.com

person[key] = "xyz@gmail.com";

// above will process    variable  key  value that is email as a key of person object and will provide it an value xyz@gmail.com

console.log(person);
