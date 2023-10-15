/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let next = ((x/1) + 1)/2
    while (next - ((x/next) + (next))/2 >= 0.000001){
        next = ((x/next) + (next))/2
    }
    return Math.floor(next)
};
console.log(mySqrt(2))