/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = Math.abs(x)
    let sum = 0
    while (a !== 0){
        let rem = a % 10
        sum = sum * 10 + rem
         a = Math.floor(a/10)

    }
    console.log(sum)
    if ( sum === x)
    return true
    
    else
    return false

    
};
console.log(isPalindrome(-121))