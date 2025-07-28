function lowerBound(nums, x) {
  let s = 0;
  let e = nums.length - 1;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (nums[m] >= x) {
      e = m - 1;
    } else s = m + 1;
  }
  return s;
}

let nums = [1, 2, 2, 3];
let x = 2;

console.log(lowerBound(nums, x));

// Input : nums= [1,2,2,3], x = 2

// Output:1

// Explanation:

// Index 1 is the smallest index such that arr[1] >= x.
