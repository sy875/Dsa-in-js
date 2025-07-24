// 796. Rotate String

const rotateString = function (s, goal) {
  if (goal.length !== s.length) return false;
  let newstr = s + s;

  for (let i = 0; i < s.length; i++) {
    let slice = newstr.slice(i, i + goal.length);
    if (slice === goal) return true;
  }

  return false;
};

let s = "abcde",goal = "cdeab";
console.log(rotateString(s, goal));
