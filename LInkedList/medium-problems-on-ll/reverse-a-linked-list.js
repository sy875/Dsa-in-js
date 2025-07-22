import LinkedList from "../singly-ll/LinkedList.js";

LinkedList.prototype.reverse = function () {
  let prev = null;
  let curr = this.head;

  this.tail = this.head;

  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
};

LinkedList.prototype.reverseRec = function (prev, curr) {
  if (curr == null) {
    this.tail = this.head;
    this.head = prev;
    return;
  }
  this.reverseRec(curr, curr.next);
  curr.next = prev;
};

let ll = new LinkedList();
ll.generateLL();
ll.printLL();
console.log("After reversing....");
ll.reverseRec(null, ll.head);
ll.printLL();
