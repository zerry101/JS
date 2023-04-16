const result = (function counter() {
    let count = 0;
    function calculate() {
        return count += 1;
    }

    return calculate;
})();

45
// let result=counter();


console.log(result());
console.log(result());
console.log(result());




// iife function(automatically executable)

(function test() {
    console.log('hii');
})();


function counterwrapper() {
    let count = 0;

return  function counter() {
        return count++;
    }

}

res = counterwrapper();
ros = counterwrapper();
console.log(res(),'res');
console.log(res(),'res');
console.log(res(),'res');
console.log(ros(),'ros');
console.log(ros(),'ros');
console.log(res(),'res');
console.log(ros(),'ros');
