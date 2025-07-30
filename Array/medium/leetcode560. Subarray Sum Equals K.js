const subarraySum = function (nums, k) {
  // if(nums.length == 1)
  let currsum = 0,
    count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    currsum += nums[i];
    if (currsum == k) count++;
    if (map.has(currsum - k)) {
      count += map.get(currsum - k);
    }
    map.set(currsum, (map.get(currsum) || 0) + 1);
  }
  return count;
};
