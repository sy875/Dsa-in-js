import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

for (let i = 1; i <= 9; i++) {
  ll.addLast(i);
}

// ll.printLL();

function reverseKGroupV2(head, k) {
  if (!head) return head;
  let firstpart = head;
  let secondpart = head;

  for (let i = 0; i < k - 1; i++) {
    if (!secondpart) return head;
    secondpart = secondpart.next;
  } 
  if (!secondpart) return head;

  let nextgroupstart = secondpart.next;
  secondpart.next = null;

  let [newhead, tail] = reverse(firstpart);

  let newhead2 = reverseKGroup(nextgroupstart, k);

  tail.next = newhead2;

  return newhead;
}


function reverseKGroup(head, k) {
  if (!head) return head;
  let firstpart = head;
  let secondpart = head;

  for (let i = 0; i < k - 1; i++) {
    if (!secondpart) return head;
    secondpart = secondpart.next;
  }
  if (!secondpart) return head;

  let nextgroupstart = secondpart.next;
  secondpart.next = null;

  let [newhead, tail] = reverse(firstpart);

  let newhead2 = reverseKGroup(nextgroupstart, k);

  tail.next = newhead2;

  return newhead;
}

function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextnode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextnode;
  }
  return [prev, head];
}

let rhead = reverseKGroup(ll.head, 2);
let op = "";
while (rhead) {
  op += rhead.val + "->";
  rhead = rhead.next;
}
console.log(op);
