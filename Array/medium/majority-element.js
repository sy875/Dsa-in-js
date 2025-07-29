// Boyer-Moore Majority Voting Algorithm

const majorityElement = function (nums) {
  let count = 0,candidate = -1;
  for (let x of nums) {
    if (count == 0) {
      count = 1;
      candidate = x;
    } else {
      if (x == candidate) count++;
      else count--;
    }
  }

  return candidate;
};
