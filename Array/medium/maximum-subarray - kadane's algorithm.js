const maxSubArray = function (nums) {
  let max_so_far = -Infinity;
  let currmax = 0;

  for (let i = 0; i < nums.length; i++) {
    currmax += nums[i];
    if (currmax > max_so_far) max_so_far = currmax;
    if (currmax < 0) currmax = 0;
  }
  return max_so_far;
};
