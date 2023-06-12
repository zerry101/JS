let a = () => {
return    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456);

        }, 4000);
    })
}


// the below is IIFE function syntax:()()
(async () => {
    let d = await a();
    console.log(d);
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);

}
)()

