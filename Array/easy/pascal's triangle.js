const generate = function (numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    let temparr = [1];
    for (let j = 1; j < i; j++) {
      temparr.push(ans[i - 1][j - 1] + ans[i - 1][j]);
    }
    if (i > 0) temparr.push(1);
    ans.push(temparr);
  }

  return ans;
};
