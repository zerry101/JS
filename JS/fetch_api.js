


let p = fetch("https://cat-fact.herokuapp.com/facts")

p.then((data) => {
    console.log(data.status);
    console.log(data.ok);
    console.log(data.headers);

    return data.json();
}).then((data) => {
    
    console.log(data);

})