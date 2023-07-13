let arr = [20,10, 1, 2, 11, 9, 8, 19, 16];

for (let i = 0; i <= arr.length ; i++) {
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j ];
      arr[j] = temp;
    }
  }
}

console.log(arr);
