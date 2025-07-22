import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.generateLL();

ll.tail.next = ll.head;

LinkedList.prototype.findLengthOfLoop = function () {
  let slow = this.head;
  let fast = this.head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }

  if (!fast || !fast.next) {
    console.log("No loop found in the linked list");
    return 0;
  }

  let len = 1;
  fast = fast.next;
  while (slow != fast) {
    len++;
    fast = fast.next;
  }
  console.log("Length of loop in ll is", len);
};

ll.findLengthOfLoop();
