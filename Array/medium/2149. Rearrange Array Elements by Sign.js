//Brute force approach
rearrangeArray = function (nums) {
  let pos = [];
  let neg = [];
  let ans = [];
  for (let x of nums) {
    if (x > 0) pos.push(x);
    else neg.push(x);
  }
  // console.log(pos,neg)
  let j = 0,
    k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      ans.push(pos[j]);
      j++;
    } else {
      ans.push(neg[k]);
      k++;
    }
  }

  return ans;
};

//optimize approach
const rearrangeArrayV2 = function (nums) {
    let posidx = 0, negidx = 1
    let ans = Array(nums.length)
    for (let x of nums) {
        if (x > 0) {
            ans[posidx] = x
            posidx += 2
        }
        else {
            ans[negidx] = x
            negidx += 2
        }
    }
    return ans
};