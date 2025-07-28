function findCeil(arr, x) {
  // code here
  let s = 0;
  let e = arr.length - 1;
  let ans = -1;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);
    if (arr[m] >= x) {
      ans = m;
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  // return ans
  // or you can directly return
  return s < arr.length ? s : -1;
}
