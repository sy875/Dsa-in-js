const reversePairs = function (nums) {

    let count = 0
    mergesort(nums, 0, nums.length - 1)
    return count

    function mergesort(arr, start, end) {
        if (start >= end) return 0
        // console.log(start, end)
        let mid = Math.floor((start + end) / 2)

        mergesort(arr, start, mid)
        mergesort(arr, mid + 1, end)

        let i = start, j = mid + 1
        count += countpairs(arr, start, mid, end)
        merge(arr, start, mid, end)
    }
    function countpairs(arr, start, mid, end) {
        let right = mid + 1
        let cnt = 0
        for (let i = start; i <= mid; i++) {
            while (right <= end && arr[i] > 2 * arr[right]) right++
            cnt += (right - (mid + 1))
        }
        return cnt
    }
    function merge(arr, start, mid, end) {

        let i = start, j = mid + 1
        let ans = []
        while (i <= mid && j <= end) {
            if (arr[i] <= arr[j]) {
                ans.push(arr[i++])

            } else {

                ans.push(arr[j++])
            }
        }

        while (i <= mid) ans.push(arr[i++])
        while (j <= end) ans.push(arr[j++])

        for (i = 0; i < ans.length; i++) {
            arr[i + start] = ans[i]
        }

    } 
};