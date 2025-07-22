import LinkedList from "../singly-ll/LinkedList.js";

//linked list is 11->12->13->14>15

LinkedList.prototype.findMiddle = function () {
  let slow = this.head;
  let fast = this.head;

  while (slow != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log("middle of ll is ", slow.val);
};

let ll = new LinkedList();
ll.generateLL();
ll.printLL();
ll.findMiddle();
