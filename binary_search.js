/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  function search(start, end) {
    if (start > end) {
      return start;
    }
    const middle = Math.round((start + end) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      return search(start, middle - 1);
    } else {
      return search(middle + 1, end);
    }
  }

  return search(start, end);
};

console.log(searchInsert([1, 2, 3, 5, 7], 1));
