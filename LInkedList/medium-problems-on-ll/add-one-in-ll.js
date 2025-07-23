import LinkedList from "../singly-ll/LinkedList.js";
import Node from "../singly-ll/Node.js";

let ll = new LinkedList();

// for (let i = 1; i <= 9; i++) {
//   ll.addLast(i);
// }

ll.addLast(9)
ll.addLast(9)
ll.addLast(9)

LinkedList.prototype.addOne = function (node) {
  // your code here
  let dummyHead = new Node(0);
  dummyHead.next = node;
  let nonNineNode = dummyHead;

  while (node != null) {
    if (node.val != 9) {
      nonNineNode = node;
    }
    node = node.next;
  }
  // console.log(nonNineNode )
  nonNineNode.val++;
  nonNineNode = nonNineNode.next;

  while (nonNineNode != null) {
    nonNineNode.val = 0;
    nonNineNode = nonNineNode.next;
  }

  this.head = (dummyHead.val == 1 ? dummyHead : dummyHead.next)
};

ll.printLL();

console.log("after adding one");
ll.addOne(ll.head);
ll.printLL();
