// In callback functions are passes as an argument pass only name of function


// Simple Callback 

simpfunc=(arg1,arg2,callback )=>{

    // console.log(arg1);

   total=callback(arg1,arg2);
   console.log(total);
}

 sum=(arg1,arg2)=>{
return arg1+arg2;
}

simpfunc(1,2,sum);



function loadName(name,callback1,callback2){
console.log(name);
if(name.charAt(0)=='z'){

    callback1();
}
else{
    callback2();
}
}


function hello1(){
    console.log('This is hello1');
}
function hello2(){
    console.log('This is hello2');
}

loadName('ishan',hello1,hello2);