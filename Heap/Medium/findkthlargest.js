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

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return root;
    }

    top() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;

        if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[smallestIndex]
        ) {
            smallestIndex = leftChildIndex;
        }

        if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] < this.heap[smallestIndex]
        ) {
            smallestIndex = rightChildIndex;
        }

        if (index !== smallestIndex) {
            this.swap(index, smallestIndex);
            this.heapifyDown(smallestIndex);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
