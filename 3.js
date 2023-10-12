var majorityElement = function (nums) {
  const n = nums.length;
  if (n > 5 * 10000) {
    throw new Error(`Input array must have a length of ${5 * 10000}.`);
  }

  if (n === 1) {
    return nums[0];
  }

  const frequencyMap = new Map();
  const majorityThreshold = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const frequency = (frequencyMap.get(num) || 0) + 1;
    console.log(frequency);

    if (frequency > majorityThreshold) {
      return num;
    }

    frequencyMap.set(num, frequency); //
  }

  return null;
};
majorityElement([1, 1, 1, 1, 2, 2, 3, 3]);
