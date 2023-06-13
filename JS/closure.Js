message="good global";

function print(){
    let message="good mornning";
    console.log(message);

    let c=function print1(){
        console.log(message+"this is c");
    }

    return c;
}

c=print();
console.log(print());
console.log(c());