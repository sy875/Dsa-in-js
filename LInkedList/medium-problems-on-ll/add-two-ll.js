import LinkedList from "../singly-ll/LinkedList.js";
import Node from "../singly-ll/Node.js";

let listA = new LinkedList();
let listB = new LinkedList();

for (let i = 1; i < 5; i++) {
  listA.addLast(i);
  listB.addLast(i * 2);
}

const addTwoNumbers = function (l1, l2) {
  let dummyNode = new Node();
  let tail = dummyNode;
  let carry = 0;

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    tail.next = new Node(sum % 10);
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  let ans = "";
  let curr = dummyNode.next;
  while (curr != null) {
    ans += curr.val.toString() + "->";
    curr = curr.next;
  }
  console.log(ans);
  // return dummyNode.next
};

listA.printLL();
listB.printLL();

console.log("after adding ");
addTwoNumbers(listA.head, listB.head);
