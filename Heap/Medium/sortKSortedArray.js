import MinHeap from "../Implementation/minheap.js";

function nearlySorted(arr, k) {
  // code
  let pq = new MinHeap();
  for (let i = 0; i < k && i < arr.length; i++) {
    pq.push(arr[i]);
  }

  let idx = 0;
  for (let i = k; i < arr.length; i++) {
    pq.push(arr[i]);
    arr[idx++] = pq.pop();
  }
  while (pq.size() > 0) {
    arr[idx++] = pq.pop();
  }
}

// Input: arr[] = [6, 5, 3, 2, 8, 10, 9], k = 3
// Output: [2, 3, 5, 6, 8, 9, 10]
// Explanation: The sorted array will be 2 3 5 6 8 9 10

let arr = [6, 5, 3, 2, 8, 10, 9],
  k = 3;
console.log("before : ", arr);
nearlySorted(arr, k)
console.log("after: ", arr);
