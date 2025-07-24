const isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];
    if ((mapS[c1] && mapS[c1] != c2) || (mapT[c2] && mapT[c2] != c1)) {
      return false;
    } else {
      mapS[c1] = c2;
      mapT[c2] = c1;
    }
  }
  return true;
};

// Input: s = "egg", t = "add"

// Output: true

let s = "egg",
  t = "add";

console.log(isIsomorphic(s, t));
