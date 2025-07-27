const shortestPalindrome = function (s) {
  let rev = s.split("").reverse().join("");
  let temp = s + "-" + rev;
  let lps = buildLps(temp);

  let longestlpslen = lps[temp.length - 1];
  let culprit = rev.substring(0, s.length - longestlpslen);

  return culprit + s;
};

function buildLps(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let len = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] == pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"

let s = "aacecaaa";

console.log(shortestPalindrome(s));
