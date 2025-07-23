import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.generateLL();

LinkedList.prototype.rotateRight = function (k) {
  let head = this.head;
  if (!head) return head;
  let len = 0;
  let curr = head;
  while (curr.next) {
    curr = curr.next;
    len++;
  }
  len++;
  // console.log(curr.val)
  curr.next = head;

  let breakPoint = len - (k % len);
  while (curr && breakPoint-- > 0) {
    curr = curr.next;
  }
  // console.log(curr.val)
  this.head = curr.next;
  curr.next = null;
};

ll.printLL()
console.log("after rotating 2 times");

ll.rotateRight(2);
ll.printLL();
