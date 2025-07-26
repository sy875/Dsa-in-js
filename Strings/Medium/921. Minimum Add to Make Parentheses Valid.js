const minAddToMakeValid = function (s) {
  if (s.length == 0) return 0;
  let open = 0
  let close = 0
  for (let x of s) {
    if (x == "(") open++;
    else if (x == ")" && open > 0) open--;
    else close++;
  }
  return open + close;
};

// Input: s = "((("
// Output: 3
let s = "(((";

console.log(minAddToMakeValid(s));
