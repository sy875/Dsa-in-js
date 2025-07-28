// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

const search = function (nums, target) {
  let pivot = findPivot(nums, target);
  // console.log("pivot is", pivot)
  let left = binarysearch(nums, 0, pivot - 1, target);
  if (left != -1) return left;
  return binarysearch(nums, pivot, nums.length - 1, target);
};

function findPivot(nums, target) {
  let s = 0;
  let e = nums.length - 1;
  while (s < e) {
    let m = Math.floor(s + (e - s) / 2);
    if (nums[m] > nums[e]) {
      s = m + 1;
    } else {
      e = m;
    }
  }
  return e;
}

function binarysearch(arr, start, end, target) {
  let s = start,
    e = end;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (arr[m] == target) return m;
    if (arr[m] > target) e = m - 1;
    else s = m + 1;
  }
  return -1;
}
