const majorityElement = function (nums) {
    let maj1 = 0, maj2 = 0
    let count1 = 0, count2 = 0
    for (let x of nums) {
        if (maj1 == x) count1++
        else if (maj2 == x) count2++
        else if (count1 == 0) {
            maj1 = x
            count1 = 1
        } else if (count2 == 0) {
            maj2 = x
            count2 = 1
        }
        else {
            count1--
            count2--
        }
    }

    let ans = []
    let freq1 = 0, freq2 = 0
    for (let x of nums) {
        if (maj1 == x) freq1++
        if (maj2 == x) freq2++
    }
    if (freq1 > Math.floor(nums.length / 3)) ans.push(maj1)
    if (freq2 > Math.floor(nums.length / 3) && !ans.includes(maj2)) ans.push(maj2)
    return ans
};