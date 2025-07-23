import DoublyLL from "../doubly-ll/doublyll.js";

let dll = new DoublyLL();

new Array(1, 2, 4, 5, 6, 8, 9).map((item) => dll.addLast(item));

let ans = [];

// let ans = [];
function findPairsWithGivenSum(head, target) {
  let ptr1 = head;
  let ptr2 = head;
  while (ptr2.next != null) ptr2 = ptr2.next;
  while (ptr1 != ptr2 && ptr1.val < ptr2.val) {
    if (ptr1.val + ptr2.val == target) {
      ans.push([ptr1.val, ptr2.val]);
      ptr1 = ptr1.next;
      ptr2 = ptr2.prev;
    } else if (ptr1.val + ptr2.val > target) ptr2 = ptr2.prev;
    else ptr1 = ptr1.next;
  }
  //   console.log(ans)
  return ans;
}

findPairsWithGivenSum(dll.head, 7);
console.log("ans is ", ans);
