//method-1
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    let num = x
    let rev = 0
    while (num != 0) {
        let rem = num % 10
        rev = rev * 10 + rem
        num = Math.floor(num / 10)
    }
    return rev == x
};

//hack to show leetcode runtime 0 
// process.on("exit", () => {
//     require("fs").writeFileSync("display_runtime.txt", "0");
// });

// Method-2
var isPalindrome = function (x) {
    let str = x.toString()
    return str.split("").reverse().join("") === str
};