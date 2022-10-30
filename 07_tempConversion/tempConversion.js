const ftoc = function (num) {
  let ans = ((num - 32) * 5) / 9;
  ans = Math.round(ans * 10) / 10;
  return ans;
};

const ctof = function (num) {
  let ans = num * (9 / 5) + 32;
  ans = Math.round(ans * 10) / 10;
  return ans;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
