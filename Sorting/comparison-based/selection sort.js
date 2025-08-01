// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

let arr = [7, 4, 1, 5, 3];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1;
    let maxIndex = getMaxIndex(arr, 0, last);
    swap(arr, maxIndex, last);
  }
}

function getMaxIndex(arr, start, end) {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
}

function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

console.log("before sorting : ", arr);
selectionSort(arr);
console.log("after sorting : ", arr);
