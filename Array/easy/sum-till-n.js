const missingNumber = function (nums) {
  let n = nums.length;
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let sumtilln = Math.floor((n * (n + 1)) / 2);
  return sumtilln - sum;
};
