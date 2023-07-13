var lengthOfLastWord = function(s) {
    let string=s.trim();
    let arr=string.split(' ');

    let strLength=arr[arr.length-1].length
    console.log(length)
    return strLength
};
lengthOfLastWord('hello world')