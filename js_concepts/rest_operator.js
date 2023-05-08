function sum(name,course,...args){
    let sum=0;
for(i in args){
        sum+=args[i];
    }
return sum;

// return arguments;

}

console.log(sum('zishan','',45,54,46));
console.log(sum('ya','btech',54,57,43));

