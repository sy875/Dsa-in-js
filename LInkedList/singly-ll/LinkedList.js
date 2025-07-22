import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  addFirst(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    // head->newNode
    // prevNode-> prevhead
  }

  addLast(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  add(idx, val) {
    if (this.head == null) {
      this.addFirst(val);
      return;
    }
    if (this.size <= idx) {
      this.addLast(val);
      return;
    }
    let temp = this.head;
    while (temp != null && --idx > 0) {
      temp = temp.next;
    }

    let newNode = new Node(val);
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }
  printLL() {
    let temp = this.head;
    let output = "";
    while (temp != null) {
      // console.log(temp.val, "-->");
      output += temp.val + "->";
      temp = temp.next;
      if(output.length>100) break
    }
    output += "null";
    console.log(output);
  }
  removeFirst() {
    if (this.head == null) return;
    if (this.head.next == null) {
      this.head = null;
      this.size--;
      return;
    }
    this.head = this.head.next;
    this.size--;
  }
  removeLast() {
    if (this.head == null) return;
    if (this.head == this.tail) {
      this.head = null;
      this.size -= 1;
      return;
    }
    let temp = this.head;
    while (temp.next != this.tail) {
      temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
    this.size -= 1;
  }
  remove(idx) {
    if (idx == 1) {
      this.removeFirst();
      return;
    }
    if (idx == this.size) {
      this.removeLast();
      return;
    }
    let temp = this.head;
    while (temp.next != null && --idx) {
      temp = temp.next;
    }

    temp.next = temp.next.next;
    this.size--;
  }

  search(val) {
    if (this.head == null) return;
    let temp = this.head;
    let idx = 0;

    while (temp != null) {
      if (temp.val == val) return idx;
      temp = temp.next;
      idx++;
    }
    return -1;
  }
  generateLL() {
    for (let i = 11; i <= 15; i++) {
      this.addLast(i);
    }
  }
}

export default LinkedList;
// let ll = new LinkedList();

// ll.addFirst(20);
// ll.addLast(30);
// ll.addLast(40);
// ll.addFirst(10);
// ll.addLast(50);
// ll.add(2, 44);

// console.log(ll.printLL());
// ll.removeFirst();
// ll.removeLast();
// ll.remove(2);
// console.log(ll.printLL());
// console.log("the val 44 found at idx", ll.search(44));
// console.log(
//   "head is ",
//   ll.head.val,
//   "tail is ",
//   ll.tail.val,
//   "size of linkd list is ",
//   ll.size
// );
