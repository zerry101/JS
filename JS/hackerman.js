async function hack() {

    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initiating...')

        }, 1000);
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetching username and password...')
        }, 2000);
    })

    let ans = await p;
    console.log(ans);
    ans = await p2; 
    console.log(ans);
}

hack();