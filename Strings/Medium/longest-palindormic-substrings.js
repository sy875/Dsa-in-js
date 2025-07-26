const longestPalindrome = function (s) {
  let n = s.length;
  let maxlen = 1;
  let sp = 0;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));

  // console.log(dp)

  function solve(i, j) {
    if (i >= j) return true;
    if (dp[i][j] != false) return true;
    if (s[i] == s[j]) {
      dp[i][j] = solve(i + 1, j - 1);
      return dp[i][j];
    }
    dp[i][j] = false;
    return false;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (solve(i, j) && j - i + 1 > maxlen) {
        maxlen = j - i + 1;
        sp = i;
      }
    }
  }
  return s.substring(sp, sp + maxlen);
};

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
let s = "babad";
console.log(longestPalindrome(s));
