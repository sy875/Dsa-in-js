const findMaxConsecutiveOnes = function (nums) {
  let max = 0,count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      if (count > max) max = count;
    } else {
      count = 0;
    }
  }

  return max;
};
