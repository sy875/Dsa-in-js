import MinHeap from "../Implementation/minheap";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
    let pq = new MinHeap()
    for (let i = 0; i < k; i++) {
        pq.push(arr[i])
    }
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > pq.top()) {
            pq.pop()
            pq.push(arr[i])
        }
    }
    return pq.top()
};


