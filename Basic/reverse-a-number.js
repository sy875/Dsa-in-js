// https://leetcode.com/problems/reverse-integer/description/

const reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let rev = 0;
  const MAX_INT = 2 ** 31 - 1;
  const MAX_DIV = Math.floor(MAX_INT / 10);
  while (x != 0) {
    let rem = x % 10;
    x = Math.floor(x / 10);
    if (rev > MAX_DIV || (rev == MAX_DIV && rem > 7)) return 0;
    rev = rev * 10 + rem;
  }
  return sign * rev;
};
