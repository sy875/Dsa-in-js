// https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1


class Solution {
    subarrayXor(arr, k) {
        // your code here
        let map = new Map()
        map.set(0,1)
        let cnt = 0
        let currxor =  0
        for(let i=0;i<arr.length;i++){
            currxor =  arr[i]^currxor
            if(map.has(currxor^k)){
                cnt += map.get(currxor^k)
            }
            map.set(currxor,(map.get(currxor) || 0)+1)
            
        }
        return cnt
    }
}