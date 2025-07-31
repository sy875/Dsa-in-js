 const maxProduct = function (nums) {
    let pre = 1, suff = 1
    let ans = -Infinity
    let n = nums.length
    for (let i = 0; i < n; i++) {
        if (pre == 0) pre = 1
        if (suff == 0) suff = 1
        pre = pre * nums[i]
        suff = suff * nums[n - i - 1]
        ans = Math.max(ans,pre,suff)
        // console.log(pre,suff,ans)
    }
    return ans
};