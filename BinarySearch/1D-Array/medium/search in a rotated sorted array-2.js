// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/


const search = function (nums, target) {
  let pivot = findPivot(nums);
  // console.log("pivot is", pivot)
  let left = binarySearch(nums, 0, pivot - 1, target);
  if (left != -1) return true;
  return binarySearch(nums, pivot, nums.length - 1, target) != -1;
};

function findPivot(nums) {
  let s = 0,
    e = nums.length - 1;
  while (s < e && nums[s] == nums[s + 1]) s++;
  while (s < e && nums[e] == nums[e - 1]) e--;
  while (s < e) {
    let m = Math.floor(s + (e - s) / 2);
    if (nums[m] > nums[e]) s = m + 1;
    else e = m;
  }
  return e;
}

function binarySearch(nums, s, e, target) {
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (nums[m] == target) return m;
    if (nums[m] > target) e = m - 1;
    else s = m + 1;
  }
  return -1;
}
