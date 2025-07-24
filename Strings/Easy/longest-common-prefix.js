const strs = ["flower", "flow", "flight"];

const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let shortest = strs.reduce((a, b) => (a.length <= b.length ? a : b));

  for (let i = 0; i < shortest.length; i++) {
    const char = shortest[i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return shortest.slice(0, i);
      }
    }
  }

  return shortest;
};

console.log(longestCommonPrefix(strs));
