const countAndSay = function (n) {
  let seq = "1";
  for (let i = 1; i < n; i++) {
    let nextTerm = "";
    let currentChar = seq[0];
    let count = 1;

    for (let j = 1; j < seq.length; j++) {
      if (seq[j] != currentChar) {
        nextTerm += `${count}${currentChar}`;
        currentChar = seq[j];
        count = 0;
      }
      count++;
    }
    nextTerm += `${count}${currentChar}`;
    seq = nextTerm;
  }
  return seq;
};


// Input: n = 4

// Output: "1211"

// Explanation:

// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"

console.log(countAndSay(4))