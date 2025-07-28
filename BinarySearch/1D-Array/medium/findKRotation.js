function findKRotation(nums) {
  let s = 0,e = nums.length - 1;
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


// Given an integer array nums of size n, sorted in ascending order with distinct values. The array has been right rotated an unknown number of times, between 0 and n-1 (including). Determine the number of rotations performed on the array.


// Examples:
// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]

// Output: 4

// Explanation: The original array should be [0, 1, 2, 3, 4, 5, 6, 7]. So, we can notice that the array has been rotated 4 times.

// Input: nums = [3, 4, 5, 1, 2]

// Output: 3

// Explanation: The original array should be [1, 2, 3, 4, 5]. So, we can notice that the array has been rotated 3 times.