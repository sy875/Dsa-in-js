class Solution {
  armstrongNumber(n) {
    // code here
    let sum = 0;
    let num = n;
    while (num != 0) {
      let rem = num % 10;
      sum += rem ** 3;
      //if sum is greater than original than it is not armstrong number
      if (sum > n) return false;
      num = Math.floor(num / 10);
    }
    return sum == n;
  }
}
