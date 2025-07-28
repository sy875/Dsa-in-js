function upperBound(nums, x) {
  let s = 0;
  let e = nums.length - 1;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (nums[m] <= x) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
  return s;
}
let  nums = [1,2,2,3], x = 2
console.log(upperBound(nums, x));

// Input : n= 4, nums = [1,2,2,3], x = 2

// Output:3

// Explanation:

// Index 3 is the smallest index such that arr[3] > x.
