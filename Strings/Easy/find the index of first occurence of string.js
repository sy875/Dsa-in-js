const strStr = function (haystack, needle) {
  if (needle.length == 0) return 0;
  if (haystack.length == 0) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (
      haystack[i] == needle[0] &&
      haystack.substring(i, i + needle.length) == needle
    )
      return i;
  }

  return -1;
};

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

let haystack = "sadbutsad";
let needle = "sad";

console.log(strStr(haystack, needle));
