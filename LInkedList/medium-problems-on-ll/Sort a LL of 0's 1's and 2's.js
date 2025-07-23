import LinkedList from "../singly-ll/LinkedList.js";
import Node from "../singly-ll/Node.js";

// [1, 0, 2, 0, 1]
let ll = new LinkedList();
new Array(1, 0, 2, 0, 1).map((item) => ll.addLast(item));

LinkedList.prototype.sortNumbers = function () {
  let head = this.head;
  let zero = new Node();
  let one = new Node();
  let two = new Node();

  let zeroptr = zero;
  let oneptr = one;
  let twoptr = two;

  let temp = head;
  while (temp != null) {
    if (temp.val === Number(0)) {
      zeroptr.next = temp;
      zeroptr = zeroptr.next;
    } else if (temp.val == 1) {
      oneptr.next = temp;
      oneptr = oneptr.next;
    } else {
      twoptr.next = temp;
      twoptr = twoptr.next;
    }
    temp = temp.next;
  }

  zeroptr.next = one.next;
  oneptr.next = two.next;
  twoptr.next = null;
  this.head = zero.next;
  return zero.next;
};

LinkedList.prototype.sortNumbersInPlace = function () {
  let place = [0, 0, 0];
  let curr = this.head;

  while (curr != null) {
    place[curr.val]++;
    curr = curr.next;
  }

  curr = this.head;

  while (curr != null) {
    if (place[0] > 0) {
      curr.val = 0;
      place[0]--;
    } else if (place[1] > 0) {
      curr.val = 1;
      place[1]--;
    } else {
      curr.val = 2;
      place[2]--;
    }
    curr = curr.next;
  }
};

LinkedList.prototype.sortNumbersInPlacev2 = function () {
  let place = [0, 0, 0];
  let curr = this.head;

  while (curr != null) {
    place[curr.val]++;
    curr = curr.next;
  }

  curr = this.head;

  for (let i = 0; i <= 2; i++) {
    while (place[i]-- > 0) {
      curr.val = i;
      curr = curr.next;
    }
  }
};

ll.printLL();
console.log("After sorting..");
ll.sortNumbersInPlacev2();
ll.printLL();
