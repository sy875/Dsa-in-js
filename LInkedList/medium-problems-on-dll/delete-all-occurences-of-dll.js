import DoublyLL from "../doubly-ll/doublyll.js";

let dll = new DoublyLL();

new Array(1, 2, 3, 1, 4).map((item) => dll.addLast(item));

// console.log(dll);
dll.print();

DoublyLL.prototype.deleteAllOccurenceOfaKey = function (key) {
  let current = this.head;
  while (current) {
    let nextNode = current.next;
    if (current.val === key) {
      if (current.prev) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
        if (this.head) this.head.prev = null;
      }
      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
        if (this.tail) this.tail.next = null;
      }
    }
    current = nextNode;
  }
};

dll.deleteAllOccurenceOfaKey(1);
console.log("after removing 1");
dll.print();
