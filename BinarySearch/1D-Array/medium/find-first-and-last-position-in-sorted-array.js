// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

const searchRange = function (nums, target) {
  if (nums.length == 0) return [-1, -1];
  let first = binarysearch(nums, target, true);
  let second = binarysearch(nums, target, false);
  return [first, second];
};

function binarysearch(arr, x, first) {
  let s = 0,
    e = arr.length - 1;
  let ans = -1;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (arr[m] == x) {
      ans = m;
      if (first) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    } else if (arr[m] > x) e = m - 1;
    else s = m + 1;
  }
  return ans;
}
