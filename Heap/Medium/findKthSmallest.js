import MaxHeap from "../Implementation/maxheap.js"

class Solution {
    kthSmallest(arr, k) {
        // code here
        let pq = new MaxHeap()
        for(let i=0;i<k;i++){
            pq.push(arr[i])
        }
        for(let i =k;i<arr.length;i++){
            if(arr[i]<pq.top()){
                pq.pop()
                pq.push(arr[i])
            }
        }
        return pq.top()
    }
}

