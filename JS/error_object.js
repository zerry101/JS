// try{
// console.log(harry);
// }catch(err){
// console.log(err.message+' error message');
// console.log(err.name+' error name');
// }



try {
    console.log('harry is not good'); // custom error
} catch (err) {
    console.log(err.message + ' error message');
    // console.log(err.name+' error name');
    console.log(err.stack);
    console.log(err);
}