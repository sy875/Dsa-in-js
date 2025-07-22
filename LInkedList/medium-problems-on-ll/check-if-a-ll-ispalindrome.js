import LinkedList from "../singly-ll/LinkedList.js";

let ll = new LinkedList();

ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
// ll.addLast(4)     //uncomment this line to check if a ll is not palindrome
ll.addLast(2);
ll.addLast(1);

LinkedList.prototype.reversePart = function (head) {
  let current = head;
  let prev = null;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

LinkedList.prototype.isPalindrome = function () {
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let first = this.head;
  let second = this.reversePart(slow);

  while (first && second) {
    if (first.val != second.val) {
      console.log("ll is not palindrome");
      return;
    }
    first = first.next;
    second = second.next;
  }
  console.log("ll is palindrome");
};

ll.isPalindrome();
