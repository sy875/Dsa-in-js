import LinkedList from "../singly-ll/LinkedList.js";
import Node from "../singly-ll/Node.js";

let ll = new LinkedList();

ll.generateLL();
ll.add(2, 99);
ll.add(4, 55);
ll.printLL();

LinkedList.prototype.merge = function (l1, l2) {
  // console.log("l1 ,l2 ", l1, l2)
  let dummy = new Node();
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 != null ? l1 : l2;
  return dummy.next;
};

LinkedList.prototype.sortList = function (head) {
  
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // console.log("slow val is ", slow.val)
  let mid = slow.next;
  slow.next = null;

  let left = this.sortList(head);
  let right = this.sortList(mid);

  return this.merge(left, right);
};

console.log("After sorting ... ");
ll.sortList(ll.head);
ll.printLL();
