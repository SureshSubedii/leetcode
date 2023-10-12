var merge = function (nums1, m, nums2, n) {
  let newArr = [];
  for (let index = 0; index < m; index++) {
    newArr.push(nums1[index]);
  }
  for (let index = 0; index < n; index++) {
    newArr.push(nums2[index]);
  }
  newArr.sort((a, b) => a - b);
  nums1.splice(0, m + n, ...newArr); //start from 0 and remove the items up to m+n and replace with the items of newArr

  console.log(nums1);
};
merge([1, 2, 3, 0, 0, 0], 4, [2, 5, 6], 3);
