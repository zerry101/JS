// an async function always returns a promise

// await helps us to get the value of async function or promise when it is fulfilled 
// then will help you to show status of promise with its values 
async function fun(resolve) {


    let delhiWeather = new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve('27 deg');

        }, 5000);
    });



    let bangaloreWeather = new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve('27 deg');

        }, 5000);

    })

    // console.log('initiating dw');
    let dw = await delhiWeather;
        // console.log(typeof(dw));
    let bw = await bangaloreWeather;
    // console.log(' bw is has been fetched successfully');

    // console.log(bw);
    // console.log(dw);

    return [dw, bw];
}


// let ans=  fun();



let response= fun();

 response.then(async(data)=>{
    console.log(data);
    console.log('above is response');
    let res=await fun();
    console.log(res);
})
async function print(){
    let  ans = await fun();
// console.log(ans);

    // console.log(ans);
    // console.log(await fun()+'answer is here');
    // console.log('ans is here'+ans);
};

let ans2=fun();
ans2.then((data)=>{
    // console.log(data);
    // console.log('ans2 data');
})

print();