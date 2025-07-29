const nextPermutation = function (nums) {
  let n = nums.length;
  let goalidx = -1;
  for (let i = n - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      goalidx = i - 1;
      break;
    }
  }
  if (goalidx != -1) {
    let swapidx = goalidx;
    for (let j = n - 1; j >= goalidx + 1; j--) {
      if (nums[j] > nums[goalidx]) {
        swapidx = j;
        break;
      }
    }
    [nums[swapidx], nums[goalidx]] = [nums[goalidx], nums[swapidx]];
    // console.log(nums, goalidx, swapidx)
  }

  reverse(nums, goalidx + 1, n - 1);

  return nums;
};

function reverse(arr, s, e) {
  while (s < e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }
}
