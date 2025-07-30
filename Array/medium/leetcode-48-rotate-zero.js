rotate = function (matrix) {
  let r = matrix.length;
  let c = matrix[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = i + 1; j < c; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < r; i++) {
    matrix[i].reverse();
  }
};
