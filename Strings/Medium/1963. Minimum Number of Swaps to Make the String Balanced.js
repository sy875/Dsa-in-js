const minSwaps = function (s) {
  let balance = 0;
  let maxImbalance = 0;

  for (let ch of s) {
    if (ch == "]") {
      balance++;
      maxImbalance = Math.max(maxImbalance, balance);
    } else {
      balance--;
    }
  }

  return Math.ceil(maxImbalance / 2);
};

// Input: s = "]]][[["
// Output: 2

let s = "]]][[[";

console.log(minSwaps(s));
