// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = function (nums) {
    let s = 0, e = nums.length - 1
    while (s < e) {
        let m = Math.floor(s + (e - s) / 2)
        if (nums[m] > nums[e]) s = m + 1
        else e = m
    }
    return nums[e]
};

