const maxProfit = function (prices) {
  let min = Infinity,
    maxprofit = 0;
  for (let x of prices) {
    if (x < min) {
      min = x;
    }
    if (x - min > maxprofit) maxprofit = x - min;
  }
  return maxprofit;
};  
