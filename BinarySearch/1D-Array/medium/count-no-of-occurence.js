// https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1

class Solution {
  countFreq(arr, target) {
    // code here
    let first = this.binarysearch(arr, target, true);
    let second = this.binarysearch(arr, target, false);
    if (first == -1 || second == -1) return 0;
    return second - first + 1;
  }

  binarysearch(arr, target, first) {
    let s = 0;
    let e = arr.length - 1;
    let ans = -1;
    while (s <= e) {
      let m = Math.floor(s + (e - s) / 2);
      if (arr[m] == target) {
        ans = m;
        if (first) {
          e = m - 1;
        } else {
          s = m + 1;
        }
      } else if (arr[m] > target) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    }
    return ans;
  }
}


// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.

