// Second Largest Element

function secondLargestElement(nums) {
  if (nums.length < 2) return -1;

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let x of nums) {
    if (x > firstMax) {
      secondMax = firstMax;
      firstMax = x;
    } else if (x < firstMax && x > secondMax) {
      secondMax = x;
    }
  }

  return secondMax === -Infinity ? -1 : secondMax;
}

// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

// Examples:
// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

// Explanation: The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]

// Output: -1

// Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned
