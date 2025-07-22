import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.generateLL();

LinkedList.prototype.removeFromLast = function (n) {
  if (this.head == null) return this.head;
  
  let temp = this.head;
  let nodetodelete = this.size - n;
  if (nodetodelete == 0) return head.next;
  while (temp != null && --nodetodelete > 0) {
    temp = temp.next;
  }

  // console.log(temp.val)
  temp.next = temp.next.next;

  return this.head;
};

ll.printLL();

console.log("after deleting from last 2nd idx");
ll.removeFromLast(2);
ll.printLL();
