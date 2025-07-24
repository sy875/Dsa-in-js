const reverseWords = function (s) {
  return s.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
};

// Input: s = "a good   example"
// Output: "example good a"

console.log(reverseWords("a good   example"));
