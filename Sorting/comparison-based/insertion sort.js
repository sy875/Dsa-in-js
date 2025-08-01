// Input: arr = [7, 4, 1, 5, 3]

// Output: [1, 3, 4, 5, 7]

// Explanation: 1 <= 3 <= 4 <= 5 <= 7.

// Thus the array is sorted in non-decreasing order.

let arr = [7, 4, 1, 5, 3];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

console.log("before sorting : ", arr);
insertionSort(arr);
console.log("after sorting : ", arr);
