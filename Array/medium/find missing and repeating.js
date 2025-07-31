// https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1

//brute force
class Solution {
  findTwoElement(nums) {
    // code here
    let n = nums.length;
    let seen = new Array(n + 1).fill(0);
    let repeated = -1,
      missing = -1;

    for (let x of nums) {
      seen[x]++;
      if (seen[x] == 2) {
        repeated = x;
      }
    }

    for (let i = 1; i <= n; i++) {
      if (seen[i] == 0) {
        missing = i;
        break;
      }
    }

    return [repeated, missing];
  }
}

//optimized
class Solution {
    findTwoElement(nums) {
        let n = nums.length;

        // Calculate sum and sum of squares of given array
        let sum = 0, sqSum = 0;
        for (let x of nums) {
            sum += x;
            sqSum += x * x;
        }

        // Expected sum and sum of squares for 1 to n
        let expectedSum = (n * (n + 1)) / 2;
        let expectedSqSum = (n * (n + 1) * (2 * n + 1)) / 6;

        // Let:
        // x = repeated number
        // y = missing number
        // sum - expectedSum = x - y
        // sqSum - expectedSqSum = x^2 - y^2 = (x - y)(x + y)

        let diff = sum - expectedSum; // x - y
        let sqDiff = sqSum - expectedSqSum; // x^2 - y^2

        let sumXY = sqDiff / diff; // x + y

        let x = (diff + sumXY) / 2; // repeated
        let y = x - diff; // missing

        return [x, y];
    }
}
