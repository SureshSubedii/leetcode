var lengthOfLastWord = function (s) {
  let string = s.trim();
  let arr = string.split(" ");

  let strLength = arr[arr.length - 1].length;
  console.log(strLength);
  return strLength;
};
lengthOfLastWord("hello world");
