// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

const check = function (nums) {
  let count = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) count++;
  }
  if (nums[n - 1] > nums[0]) count++;
  return count <= 1;
};
