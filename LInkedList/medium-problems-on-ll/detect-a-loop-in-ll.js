import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.generateLL();

ll.tail.next = ll.head;

ll.printLL();

LinkedList.prototype.detectLoop = function () {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }
  console.log("the loop element is  ", slow == fast);
};


ll.detectLoop()