// an async function alwasy returns a promise
async function fun(resolve) {

    let delhiWeather = new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve('27 deg');

        }, 1000);
    });



    let bangaloreWeather = new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve('27 deg');

        }, 3000);

    })

    let dw = await delhiWeather;
    let bw = await bangaloreWeather;

    // console.log(bw);
    // console.log(dw);

    return [dw, bw];
}

// let ans=  fun();

async function print(){
    const  ans = await fun();

    console.log(await fun()+'answer is here');
    // console.log('ans is here'+ans);
};

print();