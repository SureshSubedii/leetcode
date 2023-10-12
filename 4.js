/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    }
  }
  k = nums.length;

  return k;
};
console.log(removeElement([0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 0, 4, 2], 1));
