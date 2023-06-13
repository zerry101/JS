// closure is a function along with its lexical environment
const x = () => {
    a = 1;
    console.log(a + 'x');
    const y = () => {
        a = 2;
        console.log(a + 'y');
        const z = () => {
            a = 3;
            console.log(a + 'z');
        }
    }
    y();

}

x();


console.log("----example2------");

// example 2
function init(name) {

    function displayName() {
        console.log(name);
    }

    return displayName;
}

c = init('zishan');
b = init('rohan');
console.log(c());
console.log(b());