/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let arr = [];
  let carry = [];
  const maxLength = Math.max(a.length, b.length);
  for (let i = 0; i < maxLength; i++) {
    let sum =
      (parseInt(a[a.length - 1 - i]) || 0) +
      (parseInt(b[b.length - 1 - i]) || 0) +
      (carry.shift() || 0);
    arr.unshift(sum === 2 ? "0" : sum === 3 ? "1" : sum);
    carry.unshift(sum >= 2 ? 1 : undefined);
  }
  arr.unshift(carry.shift());
  return arr.join("");
};
console.log(addBinary("1111", "1111"));
