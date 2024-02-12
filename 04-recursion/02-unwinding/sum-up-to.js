function sumUpTo(n) {
  if (n <= 1) {
    // console.log('base case=', n);
    return n;
  }
  // console.log('recursive case=', n, 'sumUpto(', n - 1, ')');
  return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;
