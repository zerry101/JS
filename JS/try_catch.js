

fun = () => {



    setTimeout(() => {
        console.log('h1');
    }, 1000);



    setTimeout(() => {
        try {
            console.log(rahul);
        } catch (err) { console.log(err+'hi hello'); }
    }, 2000);
    setTimeout(() => {
        console.log('h1');
    }, 3000);
    setTimeout(() => {
        console.log('h1');
    }, 4000);



}

fun();

// fun();
// try{
//     fun();
// }catch(err){
// console.log('hi hello'+err);
// }