const singleNumber = function (nums) {
  return nums.reduce((acc, curr) => acc ^ curr);
};
