let name="Zishan";
let course="btech";

var obj={
    name,
    course
}

console.log(obj);


let n="student";

let obj1={
    [n+"name"]:"zishan1",
    course:'btech',
    detail:function(){
        return `${this.studentname} is good `
    }

}

let obj2={
    [n+"name"]:"zishan1",
    course:'btech',
    'detail show'(age){
        return `${this.studentname} is good and age is ${age} `
    }

}

console.log(obj1);
// console.log(obj2.detail(21));
console.log(obj2['detail show'](22));