let user=["yahoo baba",20,"Delhi",["male",25000]];

let [name,...args]=user;

// console.log(age);
console.log(args);


let user1=["zishan",20,"ahmedabad"];


function userfn([name,age,city]){
  return [name,age,city];
}

let result=userfn(user1);

console.log(result);