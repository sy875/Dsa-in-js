const repeatedStringMatch = function (a, b) {
  if (b.length == 0) return 0;
  if (a.length == 0) return -1;

  let count = Math.ceil(b.length / a.length);
  let repeatedCount = a.repeat(count);

  if (repeatedCount.includes(b)) return count;
  repeatedCount += a;

  if (repeatedCount.includes(b)) return count + 1;

  return -1;
};

// Input: a = "abcd", b = "cdabcdab"
// Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.

let a = "abcd";
let b = "cdabcdab";

console.log(repeatedStringMatch(a, b));
