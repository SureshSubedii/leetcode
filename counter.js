/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = 0;
    return function() {
        return n + count++

        
    };
};
let newCounter = createCounter(10)
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter() + "\n")

let secondCounter = createCounter(12)
console.log(secondCounter())
console.log(secondCounter())
console.log(secondCounter())
console.log(secondCounter())




