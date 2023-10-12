/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var result = haystack.match(needle);
  while (result != undefined) {
    return result.index;
  }
  return -1;
};

strStr("leetcode", "ate");
