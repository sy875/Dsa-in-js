import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.generateLL();

LinkedList.prototype.deleteMiddleNode = function () {
  let head = this.head;
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;
  let prev = slow;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
};

ll.printLL();
console.log("After deleting middle node");
ll.deleteMiddleNode()
ll.printLL();
