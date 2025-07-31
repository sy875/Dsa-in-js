/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    constructor(){
        this.count = 0
    }
    inversionCount(arr) {
       this.mergesort(arr,0,arr.length-1)
       return this.count
    }
    
    mergesort(arr,start,end){
         if(start>=end) return 0 
         
         let mid = Math.floor((start+end)/2)
         
         this.mergesort(arr,start,mid)
         this.mergesort(arr,mid+1,end)
         
         this.merge(arr,start,mid,end)
    }
    merge(arr,start,mid,end){
        
        let i = start,j=mid+1
        let ans =[]
        while(i<=mid && j<=end){
            if(arr[i]<= arr[j]){
                ans.push(arr[i++])
                
            }else{
                ans.push(arr[j++])
                this.count += (mid-i+1)
            }
        }
        
        while(i<=mid) ans.push(arr[i++])
        while(j<=end) ans.push(arr[j++])
        
        for(i=0;i<ans.length;i++){
            arr[i+start] = ans[i]
        }
        
    }
}