//brute force
const longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let length = 0;
      while (set.has(n + length)) {
        // console.log(n)
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
