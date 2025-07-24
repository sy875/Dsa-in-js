// leetcode: https://leetcode.com/problems/copy-list-with-random-pointer/submissions/1709215930/

var copyRandomList = function (head) {
    if (!head) return null
    let temp = head
    while (temp) {
        let copyNode = new Node(temp.val)
        copyNode.next = temp.next
        temp.next = copyNode
        temp = temp.next.next
    }
    temp = head
    while (temp) {
        let copynode = temp.next
        if (temp.random) copynode.random = temp.random.next
        else copynode.random = null
        temp = temp.next.next
    }
    let dummyNode = new Node(0)
    let tail = dummyNode
    temp = head
    while (temp) {
        tail.next = temp.next
        temp.next = temp.next.next
        temp = temp.next
        tail = tail.next
    }

    return dummyNode.next

};
