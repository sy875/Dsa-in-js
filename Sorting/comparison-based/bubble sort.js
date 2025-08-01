// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

let nums = [7, 4, 1, 5, 3];

function bubbleSort(nums) {
  let swapped = true;
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    // if you did not swap for a particular value of i, it means the array is sorted hence stop the program
    if (!swapped) {
      // !false = true
      break;
    }
  }
}

console.log("before sorting :", nums);
bubbleSort(nums);
console.log("after sorting ", nums);
