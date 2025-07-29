//brute force O(n2)
function longestSubarray(nums, k) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let currsum = 0;
    for (let j = i; j < nums.length; j++) {
      currsum += nums[j];
      if (currsum == k) {
        console.log(j, ", " + i);
        if (j - i + 1 > max) max = j - i + 1;
      }
    }
  }
  return max;
}

// optimal approach using prefix and map
function longestSubarray(nums, k) {
  // code here
  let prefixsum = 0;
  let map = new Map();
  let maxlen = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixsum += nums[i];

    if (prefixsum == k) maxlen = i + 1;
    if (map.has(prefixsum - k)) {
      maxlen = Math.max(maxlen, i - map.get(prefixsum - k));
    }
    if (!map.has(prefixsum)) {
      map.set(prefixsum, i);
    }
  }

  return maxlen;
}
