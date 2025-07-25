const frequencySort = function (s) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  let chars = Object.keys(freq);

  chars.sort((a, b) => freq[b] - freq[a]);

  let result = "";

  for (let char of chars) {
    result += char.repeat(freq[char]);
  }

  return result;
};

// Input: s = "tree"
// Output: "eetr"

let s = "tree";
console.log(frequencySort(s));
