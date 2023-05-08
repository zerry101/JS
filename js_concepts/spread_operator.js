function sum(name,course,...args){
    let sum=0;
for(i in args){
        sum+=args[i];
        // console.log(args[i],typeof(args));
    }
return sum;

// return arguments;

}

args1=[45,54,46];
// console.log(...args1);
// console.log(args1);
// arr=args1;
console.log(sum('fdf','dfd',...args1));
// console.log(sum('zishan','',...args1));
// console.log(sum('ya','btech',54,57,43));

