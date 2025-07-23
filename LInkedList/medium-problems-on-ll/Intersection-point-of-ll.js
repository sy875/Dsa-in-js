import LinkedList from "../singly-ll/LinkedList.js";
import Node from "../singly-ll/Node.js";

// let ll = new LinkedList()

// / Create the shared part: 8 -> 4 -> 5
const shared = new Node(8);
shared.next = new Node(4);
shared.next.next = new Node(5);

// Create list A: 4 -> 1 -> [shared]
const listA = new LinkedList();
listA.addLast(4);
listA.addLast(1);

// Traverse to end of listA and attach shared
let tempA = listA.head;
while (tempA.next != null) tempA = tempA.next;
tempA.next = shared;

// Fix tail and size for listA manually
listA.tail = shared.next.next;
listA.size += 3;

// Create list B: 5 -> 6 -> 1 -> [shared]
const listB = new LinkedList();
listB.addLast(5);
listB.addLast(6);
listB.addLast(1);

// Traverse to end of listB and attach shared
let tempB = listB.head;
while (tempB.next != null) tempB = tempB.next;
tempB.next = shared;

// Fix tail and size for listB manually
listB.tail = shared.next.next;
listB.size += 3;

// Print both lists (avoid infinite loop in case of wrong links)
listA.printLL(); // Should print: 4->1->8->4->5->null
listB.printLL(); // Should print: 5->6->1->8->4->5->null

LinkedList.prototype.findIntersectionPoint = function (headA, headB) {
  let ptrA = headA;
  let ptrB = headB;

  while (ptrA != ptrB) {
    ptrA = ptrA === null ? headB : ptrA.next;
    ptrB = ptrB == null ? headA : ptrB.next;
  }

  return ptrA.val;
};

console.log(
  "intersection point is ",
  listA.findIntersectionPoint(listA.head, listB.head)
);
