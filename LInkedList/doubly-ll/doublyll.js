import Node from "./Node.js";

class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  addFirst(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  addLast(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }
  add(idx, val) {
    if (idx < 0 || idx > this.size) {
      throw new Error("Provide correct indexing");
      return;
    }
    if (idx == 0) {
      this.addFirst(val);
      return;
    }
    if (idx == this.size) {
      this.addLast(val);
      return;
    }
    let newNode = new Node(val);
    let temp = this.head;
    while (temp.next != null && --idx > 0) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next.prev = newNode;
    newNode.prev = temp;
    temp.next = newNode;
    this.size++;
  }
  print() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
  removeFirst() {
    if (this.head == null) return;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      let temp = this.head.next;
      temp.prev = null;
      this.head = temp;
    }
    this.size--;
  }
  removeLast() {
    if (this.head == null) return;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      let temp = this.tail.prev;
      temp.next = null;
      this.tail = temp;
    }
    this.size--;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.size) return;
    if (idx == 0) {
      this.removeFirst();
      return;
    }
    if (idx == this.size - 1) {
      this.removeLast();
      return;
    }
    let temp = this.head;
    while (temp != null && idx-- > 0) {
      temp = temp.next;
    }
    let prevel = temp.prev;
    prevel.next = temp.next;
    temp.next.prev = prevel;
    this.size--;
  }
  reverse() {
    if (this.head == null) return;
    let temp = this.tail;

    while (temp != null) {
    //   console.log("val and prev",temp.val,temp.prev)  
      let prevel = temp.prev;
      let nextel = temp.next;
      temp.next = prevel;
      temp.prev = nextel;

      temp = temp.next;
    }

    temp = this.tail;
    this.tail = this.head;
    this.head = temp;
  }
}

let dl = new DoublyLL();
dl.addFirst(30);
dl.addFirst(40);
dl.addFirst(50);
dl.addFirst(60);
dl.add(4, 44);
dl.print();
// console.log(dl.head.val, dl.tail);
// dl.removeFirst();
// console.log("after removing first element");
// dl.print();
// dl.removeLast();
// console.log("after removing last element");
// dl.print();

dl.remove(2);
console.log("after removing 2nd index");
dl.print();
console.log("after reversing");
dl.reverse();
dl.print();
