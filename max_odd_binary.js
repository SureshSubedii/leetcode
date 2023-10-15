/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let count = 0;
  let length = s.length;
  let first = -1;
  let arr = [...s];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      count++;
      arr[i] = "0";
    }
  }
  if (length === count) {
    return s;
  }
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      length--;
      arr[length] = "1";
    } else {
      first++;
      arr[first] = "1";
    }
  }
  return arr.join("");
};
console.log(maximumOddBinaryNumber("100101"));
