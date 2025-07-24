
// Question link: https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1

class Solution {
    flatten(root) {
        // your code here
        if(!root || !root.next) return root
        let mergell = this.merge(root,root.next)
        // console.log("node.................",mergell)
        mergell.next = root.next.next
        return this.flatten(mergell)
    
    }
    
    merge(l1,l2){
        let dummyhead = new Node()
        let tail = dummyhead
        // console.log(l1,l2)
        while(l1 && l2){
            // console.log("l1 and l2 called")
            if(l1.data<l2.data){
                tail.bottom = l1
                l1 = l1.bottom
            }else{
                tail.bottom = l2
                l2 = l2.bottom
            }
            tail = tail.bottom
        }
        // console.log(tail.val)
        if(l1) tail.bottom  = l1
        if(l2) tail.bottom = l2
        return dummyhead.bottom
    }
}

