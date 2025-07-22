import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

for (let i = 1; i <= 5; i++) {
  ll.addLast(i);
}

LinkedList.prototype.SegreggateOddEvenList = function () {
  if (this.head == null || this.head.next == null) return this.head;
  let odd = this.head;
  let even = this.head.next;
  let evenhead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenhead;

  return this.head;
};

ll.SegreggateOddEvenList()
ll.printLL()

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var oddEvenList = function (head) {
//     let even = new ListNode()
//     let odd = new ListNode()

//     let evenptr = even
//     let oddptr = odd

//     let temp = head
//     let idx = 1

//     while (temp != null) {
//         if (idx % 2 == 0) {
//             evenptr.next = temp
//             evenptr = temp
//         } else {
//             oddptr.next = temp
//             oddptr = temp
//         }
//         temp = temp.next
//         idx++
//     }
//     oddptr.next = even.next
//     evenptr.next = null
//     return odd.next
// };
