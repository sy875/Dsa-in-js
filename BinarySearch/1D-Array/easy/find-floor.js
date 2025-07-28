// https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1

function findFloor(arr, x) {
  // your code here
  let s = 0,
    e = arr.length - 1;
  let ans = -1;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (arr[m] <= x) {
      ans = m;
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
  return ans;
  // or you can directly return
  //   return e
}
