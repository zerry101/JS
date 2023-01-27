// const str=Math.floor(Math.random()*26);
// console.log(str);



const accountNumber=function(length){
    characters1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characters2="0123456789"
    
    let result1='';
    let result2='';
    for(i=0;i<length/2;i++)
    {
       result1+=characters1.charAt(Math.floor(Math.random()*characters1.length));
       result2+=characters2.charAt(Math.floor(Math.random()*characters2.length));
    }

    // console.log(Math.random()*characters.length);
    return result1+result2;
}

console.log(accountNumber(8));