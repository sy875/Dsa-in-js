var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let dir = 0;
  let top = 0;
  let right = n - 1;

  let down = m - 1;
  let left = 0;

  let ans = [];
  while (top <= down && left <= right) {
    if (dir == 0 && left <= right) {
      for (let i = left; i <= right; i++) {
        ans.push(matrix[top][i]);
      }
      top++;
      dir++;
    }

    if (dir == 1 && top <= down) {
      for (let i = top; i <= down; i++) {
        ans.push(matrix[i][right]);
      }
      right--;
      dir++;
    }
    if (dir == 2 && left <= right) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[down][i]);
      }
      down--;
      dir++;
    }
    if (dir == 3 && top <= down) {
      for (let i = down; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
      dir++;
    }

    dir %= 4;
  }
  return ans;
};
