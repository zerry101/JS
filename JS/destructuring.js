// destructuring array

let arr = [3, 5, 2, 5, 6, 7, 8, 10, 11, 12, 13, 15];
let arr1 = [];
let [a, b, ...rest] = arr;
console.log([a, b]);
console.log(rest);
// destructruring objects

console.log("---destructuring objects---");

let { x, y, rest1 } = { x: 1, y: 5, rest1: { ...arr } };
let obj1 = { ...arr };

console.log(x, y, rest1);
console.log(obj1);


sum = (v1, v2, v3) => {
    console.log("this is sum");
    console.log(v1);
    console.log(v2);
    console.log(v3);
    return v1 + v2 + v3;
}

console.log(sum(...arr));

let obj2 = {
    name: "harry",
    company: "xtz Pvt. Ltd.",
    age: 25
}


console.log({ ...obj2, company: "xyz Pvt. Ltd." });


let obj3 = [{ ...obj2 }, { ...obj2 }]


let obj4 = obj3.map((data) => {

    return { ...data, role: "developer" }
})

console.log(obj3);
console.log(obj4);

function fun(callback = () => {
    console.log('callback here');

    hi();
    hello();

    callback1 = () => {
        console.log('callbak1 here');
        hi();
        hello();

        callback2 = () => {
            console.log('callbak2 here');
            hi();
            hello();

            callback3 = () => {
                console.log('callbak3 here');
                hi();
                hello();

                callback4 = () => {
                    console.log('callbak4 here');
                    hi();
                    hello();

                    callback4 = () => {
                        console.log('callbak4 end here');

                    }

                    callback4();
                }

                callback4();
            }

            callback3();
        }

        callback2();
    }

    callback1();

}) {

    hi();
    hello();
    callback();

}

hi = () => {
    console.log("hi");
}
hello = () => {
    console.log("hello");
}


callback = () => {
    console.log('this is callback');
}

fun();

funhere = (callback1, callback2, name) => {
    callback1();
    callback2();
    console.log(name);
}

hi10 = () => {
    console.log('hi here');
}

hello10 = () => {
    console.log('hello here');
}


funhere(hello10, hi10, 'zishan');


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(56);
    }, 20);
    setTimeout(() => {
        reject(456)
    }, 30)
})

promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        reject(234);
    })
}).then((data) => {
    console.log('second then');
    console.log(data + 'hi');
    return new Promise((resolve, reject) => {
        resolve(90);
    })
}).catch((data) => {
    console.log('second catch');
    console.log(data);

    return new Promise((resolve, reject) => {
        reject(908);
    })
}).then((data) => {
    console.log('third then');
    console.log(data);
}).catch((data) => {
    console.log('third catch');
    console.log(data);
})


let p1 = new Promise((resolve, reject) => {
    resolve("p1 resolve1" + 5432);
})
let p2 = new Promise((resolve, reject) => {
    reject("p2 reject" + 988);
})
let p3 = new Promise((resolve, reject) => {
    resolve("p3 resolve3" + 5670);
});

p2.catch((data) => {
    console.log('p2 is here');
    console.log(data);
})


let promise_all = Promise.all([p1, p2, p3]);
promise_all.then((data) => {
    console.log('promise all below');
    console.log(data);
})


let promise_all_setted = Promise.allSettled([p1, p2, p3])
promise_all_setted.then((data) => {
    console.log('promise all settled below');
    console.log(data);
})

promise_all.catch((data)=>{
    console.log("promise_all catch here");
    console.log(data);
})

let promise_race=Promise.race([p1,p2,p3]);
promise_race.then((data)=>{
    console.log("promise race below");
    console.log(data+" is first");
})

let promise_any=Promise.any([p1,p2,p3]);
promise_any.then((data)=>{
    console.log('promise any below');
    console.log(data);
})



console.log('resolve promise here');
console.log(Promise.resolve(34));
console.log('reject promise here');
console.log(Promise.reject(34));

async function fun56(){
    let p= await new Promise((resolve,reject)=>{
        resolve('op');
    })


    return p;
}

console.log('output here');
let output=fun56();

console.log(output);