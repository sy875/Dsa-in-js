const maxDepth = function (s) {
  let count = 0;
  let ans = 0;

  for (let x of s) {
    // console.log(count)
    if (x == "(") {
      count++;
      ans = Math.max(ans, count);
    }
    if (x == ")") {
      if (count == 0) return -1;
      count--;
    }
  }
  return count == 0 ? ans : -1;
};

// Input: s = "(1)+((2))+(((3)))"
// Output: 3
let s = "(1)+((2))+(((3)))";
console.log(maxDepth(s));
