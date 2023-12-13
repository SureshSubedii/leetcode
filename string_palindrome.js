
var isPalindrome = function(s) {
    let string = s.replace(/[\s\W_]/g, '').toLowerCase()
    let reversed = string.split('').reverse().join('');
    if (string === reversed) {
        return true
    }
    return false
    
};

isPalindrome("A man, a plan, a canal: Panama")