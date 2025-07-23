import DoublyLL from "../doubly-ll/doublyll.js";

let dll = new DoublyLL();

new Array(1, 1, 3, 3, 4, 5).map((item) => dll.addLast(item));

DoublyLL.prototype.removeDuplicated = function () {
  if (this.head == null || this.head.next == null) return;
  let curr = this.head;
  // let prev = this.head

  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      let nextunique = curr.next.next;
      curr.next = nextunique;
      if (nextunique) nextunique.prev = curr;
    } else {
      curr = curr.next;
    }
  }
};

dll.print();

console.log("after removing duplicates");
dll.removeDuplicated();
dll.print();
