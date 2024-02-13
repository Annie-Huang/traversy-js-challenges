function arraySum(arr) {
  if (arr.length === 0) return 0;

  return arr.shift() + arraySum(arr);
}

module.exports = arraySum;
