//brute force
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return [-1, -1];
};

//optimal approach

const twoSumv2 = function (nums, target) {
  const map = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let rem = target - nums[i];
    if (map.has(rem)) {
      return [i, map.get(rem)];
    } else {
      map.set(nums[i], i);
    }
  }
  return [-1, -1];
};
