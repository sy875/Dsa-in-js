const findPeakElement = function (nums) {
    let s = 0, e = nums.length - 1
    while (s < e) {
        let m = Math.floor(s + (e - s) / 2)
        if (nums[m] > nums[m + 1]) e = m
        else s = m + 1
    }
    return e
}; 