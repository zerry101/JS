console.log("hi");



// setTimeout(sum(2,3),1000);
setTimeout(() => {
    console.log("hi");
}, 43);
// console.log("hi2");


function sum(num1,num2){
console.log(num1+num2);
}

setTimeout(sum,2000,1,3);

setInterval(sum,2000,4,5);

// set interval is a loop hich will rerun after given interval
// set timeout is will execute only one time after given  interval