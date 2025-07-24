const isAnagram = function (s, t) {
  if (t.length != s.length) return false;

  let freq = {};

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!freq[t[i]]) return false;
    freq[t[i]]--;
  }
  return true;
};

let s = "anagram",t = "nagaram";

console.log(isAnagram(s, t));
