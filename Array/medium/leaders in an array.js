// https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

class Solution {
  // Function to find the leaders in the array.
  leaders(nums) {
    // code here
    let n = nums.length;
    let ge = Array(n);
    let currmax = nums[n - 1];

    for (let i = n - 1; i >= 0; i--) {
      if (nums[i] > currmax) currmax = nums[i];
      ge[i] = currmax;
    }

    // console.log(ge)
    let ans = [];

    for (let i = 0; i < n; i++) {
      if (nums[i] >= ge[i]) ans.push(nums[i]);
    }

    return ans;
  }
}
