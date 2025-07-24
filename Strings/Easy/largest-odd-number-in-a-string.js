

const largestOddNumber = function (num) {
    for (let i = num.length-1; i >= 0; i--) {
        if (Number(num[i]) % 2 != 0) {
            return num.substring(0, i + 1)
        }
    }
    return ""
};

console.log(largestOddNumber("239537672423884969653287101"));
