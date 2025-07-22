import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.generateLL();
ll.tail.next = ll.head;

LinkedList.prototype.findStartingPointofLoop = function () {
  let slow = this.head;
  let fast = this.head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }

  if (!fast || !fast.next) {
    console.log("No loop found in the linked list");
    return null;
  }

  slow = this.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next; // Move both pointers at the same speed
  }
  console.log("Starting point of loop in ll is ", slow.val);
};

ll.findStartingPointofLoop();
