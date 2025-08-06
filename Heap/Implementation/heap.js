class Heap {
  constructor() {
    this.arr = Array(100); // fixed-size array
    this.arr[0] = -1; // dummy at index 0 for 1-based indexing
    this.size = 0;
  }

  insert(val) {
    this.size += 1;
    let index = this.size;
    this.arr[index] = val;

    // Heapify up
    while (index > 1) {
      let parent = Math.floor(index / 2);
      if (this.arr[parent] < this.arr[index]) {
        [this.arr[parent], this.arr[index]] = [
          this.arr[index],
          this.arr[parent],
        ];
        index = parent;
      } else {
        return;
      }
    }
  }

  print() {
    let str = "";
    for (let i = 1; i <= this.size; i++) {
      str += `${this.arr[i]}->`;
    }
    console.log(str)
  }

  delete() {
    if (this.size === 0) {
      console.log("Nothing to delete");
      return;
    }

    // Move last to root
    this.arr[1] = this.arr[this.size];
    this.size--;

    // Heapify down
    let i = 1;
    while (i <= this.size) {
      let leftidx = 2 * i;
      let rightidx = 2 * i + 1;
      let largest = i;

      if (leftidx <= this.size && this.arr[leftidx] > this.arr[largest]) {
        largest = leftidx;
      }
      if (rightidx <= this.size && this.arr[rightidx] > this.arr[largest]) {
        largest = rightidx;
      }

      if (largest !== i) {
        [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];
        i = largest;
      } else {
        return;
      }
    }
  }
}

const heap = new Heap();
heap.insert(50);
heap.insert(60);
heap.insert(55);
heap.insert(70);

heap.print();
// 70-> 60-> 55-> 50->

heap.delete();
heap.print();
// 60-> 50-> 55->



// Function to find the kth smallest array element
function kthSmallest(arr, K) {
    // Create a max heap (priority queue)
    let pq = new MaxHeap();

    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        // Push the current element onto the max heap
        pq.push(arr[i]);

        // If the size of the max heap exceeds K, remove the largest element
        if (pq.size() > K)
            pq.pop();
    }

    // Return the Kth smallest element (top of the max heap)
    return pq.top();
}

// MaxHeap class definition
class MaxHeap {
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
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;

        if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] > this.heap[largestIndex]
        ) {
            largestIndex = leftChildIndex;
        }

        if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] > this.heap[largestIndex]
        ) {
            largestIndex = rightChildIndex;
        }

        if (index !== largestIndex) {
            this.swap(index, largestIndex);
            this.heapifyDown(largestIndex);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

// Driver's code:
const arr = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10];
const K = 4;

// Function call
console.log("Kth Smallest Element is: " + kthSmallest(arr, K));
