// https://leetcode.com/problems/single-element-in-a-sorted-array/

//Linear Method
const singleNonDuplicate = function (nums) {
  return nums.reduce((acc, curr) => acc ^ curr);
};

//binary search method
const singleNonDuplicatev2 = function (nums) {
  let s = 0,
    e = nums.length - 1;
  while (s < e) {
    let m = Math.floor(s + (e - s) / 2);
    let iseven = (e - m) % 2 == 0;

    if (nums[m] == nums[m + 1]) {
      if (iseven) {
        s = m + 2;
      } else {
        e = m - 1;
      }
    } else {
      if (iseven) e = m;
      else s = m + 1;
    }
  }
  return nums[e];
};
