function countDown(num) {
  // Base Case
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  // Recursive Case
  console.log(num);
  // Cannot use countDown(num--);
  num--;
  countDown(num);
}

module.exports = countDown;
