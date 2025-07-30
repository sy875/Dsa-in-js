//optimized

var merge = function (intervals) {
    if (intervals.length <= 1) return intervals
    let ans = []

    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < intervals.length; i++) {

        let [currstart, currend] = intervals[i]

        if (ans.length == 0 || ans[ans.length - 1][1] < currstart) {
            ans.push(intervals[i])
        }
        else {
            ans[ans.length - 1][1] = Math.max(currend, ans[ans.length - 1][1])
        }
    }

    return ans
};

//brute force

var merge = function (intervals) {
    if (intervals.length <= 1) return intervals
    let ans = []
    intervals.sort((a, b) => a[0] - b[0])
    let [start, end] = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        let [currstart, currend] = intervals[i]
        if (currstart <= end) end = Math.max(end, currend)
        else {
            ans.push([start, end])
            start = currstart, end = currend
        }
    }
    ans.push([start, end])
    return ans
};
