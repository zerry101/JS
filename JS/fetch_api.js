const fetch = require("node-fetch");

let apidata;

let p = fetch("https://cat-fact.herokuapp.com/facts")


p.then((data) => {
    // console.log(data.status);
    // console.log(data.ok);
    // console.log(data.headers);
    
    return data.json();
}).then((data) => {
    
    // console.log(data);
    apidata=data; 
});

let post = fetch("https://cat-fact.herokuapp.com/facts",{method:"POST",body:JSON.stringify(apidata)});
post.then((res)=>{
    return res.json();

}).then((res2)=>{
    console.log(res2);
})


