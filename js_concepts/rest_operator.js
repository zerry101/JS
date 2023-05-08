function sum(){
    let sum=0;
    for(i in arguments){
        sum+=arguments[i];
    }
return sum;
}

console.log(sum(10,10,20,20));