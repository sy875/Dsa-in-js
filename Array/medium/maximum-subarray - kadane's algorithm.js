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

//with index
const maxSubArrayWithIndex = function (nums) {
  let max_so_far = -Infinity;
  let currmax = 0;
  let start = 0,
    end = 0;
  let temp_start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currmax == 0) temp_start = i;
    currmax += nums[i];
    if (currmax > max_so_far) {
      max_so_far = currmax;
      start = temp_start;
      end = i;
    }
    if (currmax < 0) {
      currmax = 0;
      temp_start = i + 1;
    }
  }
  return max_so_far;
};
