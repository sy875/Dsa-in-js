class Solution {
  maxLen(arr) {
    // Your code goes here
    let map = new Map()
    let currsum = 0
    let maxLen = 0
    for (let i = 0; i < arr.length; i++) {
      currsum += arr[i]
      if (currsum == 0) maxLen = i
      if (map.has(currsum)) maxLen = Math.max(maxLen, i - map.get(currsum))
      else map.set(currsum, i)
    }
    return maxLen
  }
}