const  fourSum = function (nums, target) {
    if (nums.length < 4) return []
    nums.sort((a, b) => a - b)
    let n = nums.length
    let ans = []

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
            for (let j = i + 1; j < n; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue
                let k = j + 1, l = n - 1
                while (k < l) {
                    let sum = (nums[i] + nums[j] + nums[k] + nums[l])
                    if (sum == target) {
                        ans.push([nums[i], nums[j], nums[k], nums[l]])
                        k++, l--
                        while (k < l && nums[k] == nums[k - 1]) k++
                        while (k < l && nums[l] == nums[l + 1]) l--
                    } else if (sum > target) l--
                    else k++
                }

            }
    }
    // console.log(ans)
    return ans
};