let promise1=Promise.resolve(34);
promise1.then((res)=>{
    console.log(res);
})

// direclty provide  resolved value of promise

let Promise2=Promise.reject(90);
Promise2.catch((response)=>{
    console.log(response);
})