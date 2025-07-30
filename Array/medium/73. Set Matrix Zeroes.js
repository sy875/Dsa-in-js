var setZeroes = function (matrix) {
  let r = matrix.length;
  let c = matrix[0].length;
  let isFirstRowZero = matrix[0].includes(0);
  let isFirstColZero = matrix.some((row) => row[0] == 0);

  // mark zero
  for (let row = 1; row < r; row++) {
    for (let col = 1; col < c; col++) {
      if (matrix[row][col] == 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  //make row and col zero
  for (let row = 1; row < r; row++) {
    for (let col = 1; col < c; col++) {
      if (matrix[row][0] == 0 || matrix[0][col] == 0) {
        matrix[row][col] = 0;
      }
    }
  }
  //make first row zero
  if (isFirstRowZero) {
    for (let i = 0; i < c; i++) {
      matrix[0][i] = 0;
    }
  }
  //make first col zero
  if (isFirstColZero) {
    for (let i = 0; i < r; i++) {
      matrix[i][0] = 0;
    }
  }
};
