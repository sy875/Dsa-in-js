const searchInsert = function (nums, target) {
  let s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (nums[m] == target) return m;
    if (nums[m] > target) e = m - 1;
    else s = m + 1;
  }
  return s;
};

let nums = [1, 3, 5, 6],target = 5;

console.log(searchInsert(nums, target));

// Input: nums = [1,3,5,6], target = 5
// Output: 2
