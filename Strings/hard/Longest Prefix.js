const longestPrefix = function (s) {
  let lps = buildLps(s);
  // console.log(lps)
  return s.substring(0, lps[lps.length - 1]);
};

function buildLps(s) {
  const lps = new Array(s.length).fill(0);
  let len = 0;
  let i = 1;
  while (i < s.length) {
    if (s[i] == s[len]) {
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

// Input: s = "level"
// Output: "l"
// Explanation: s contains 4 prefix excluding itself ("l", "le", "lev", "leve"), and suffix ("l", "el", "vel", "evel"). The largest prefix which is also suffix is given by "l".

let s = "level";
let s2 = "ababab"
console.log(longestPrefix(s2));
