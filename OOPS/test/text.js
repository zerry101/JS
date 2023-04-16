arr = [1, 3, 25, 25, 5, 7.07];
testarr = [5, 5, 7.07];
x = 5;
y = 5;
z = Math.sqrt((x * x) + (y * y));

// if()
// {

Arr = [];
// D=new Array();
arr.forEach((element) => {
    Arr.push(Math.floor(element));
});

// if(testarr.every((element)=>{Arr.includes(element)})){
//     console.log("it is triplect");
// }
// else{
//     console.log("not");
// }
// console.log(Arr);

checker=testarr.every((element) => {
    Arr.includes(Math.floor(element));
    console.log(Math.floor(element));
});

if (checker){
    log("it is triplet")
}
else{
    console.log("not");
};

    // console.log(Math.floor(...D));
    // console.log(arr);
// }
// else{
    // console.log("it is not");
// }
