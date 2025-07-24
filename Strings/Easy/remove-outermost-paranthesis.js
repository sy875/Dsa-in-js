// Leetcode 1021. Remove Outermost Parentheses

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

const removeOuterParentheses = function (s) {
  let ans = "";
  let stack = [];
  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (open > 0) ans += s[i];
      open++;
    } else {
      open--;
      if (open > 0) ans += s[i];
    }
  }
  // console.log(ans)
  return ans;
};

console.log(removeOuterParentheses("(()())(())"));
