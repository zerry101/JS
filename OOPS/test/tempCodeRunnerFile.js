// const str=Math.floor(Math.random()*26);
// console.log(str);



const accountNumber=function(length){
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    let result='';
    for(i=0;i<length;i++)
    {
       result+=characters.charAt(Math.floor(Math.random()*characters.length));
    }

    // console.log(Math.random()*characters.length);
    return result
}

console.log(accountNumber(4));