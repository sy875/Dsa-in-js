const myAtoi = function (s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let ans = 0;
  let sign = 1;
  let i = 0;

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] == "-" ? -1 : 1;
    i++;
  }

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    ans = ans * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0));

    if (sign === 1 && ans > INT_MAX) return INT_MAX;
    if (sign === -1 && ans > -INT_MIN) return INT_MIN;

    i++;
  }

  return sign * ans;
};

let s = " -042";

console.log(myAtoi(s));
