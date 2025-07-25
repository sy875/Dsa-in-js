// Input: s = "III"
// Output: 3
// Explanation: III = 3.

function romanToInt(s) {
  const romanObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = romanObj[s[s.length - 1]];
  for (let i = 0; i < s.length - 1; i++) {
    let sign = romanObj[s[i + 1]] > romanObj[s[i]] ? -1 : 1;
    result += sign * romanObj[s[i]];
  }
  // console.log(result)
  return result;
}

let s = "III";
console.log(romanToInt(s));


