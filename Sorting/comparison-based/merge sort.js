// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

let arr = [7, 4, 1, 5, 3];

function mergeSort(arr, start, end) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let i = start,
    j = mid + 1;
  let ans = [];
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      ans.push(arr[i++]);
    } else {
      ans.push(arr[j++]);
    }
  }
  while (i <= mid) ans.push(arr[i++]);
  while (j <= end) ans.push(arr[j++]);
  for (let k = start; k <= end; k++) {
    arr[k] = ans[k - start];
  }
}

console.log("before sorting:", arr);
mergeSort(arr, 0, arr.length - 1);
console.log("after sorting:", arr);
