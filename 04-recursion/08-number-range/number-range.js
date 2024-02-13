function numberRange(startNum, endNum) {
  if (startNum === endNum) return [startNum];

  return [startNum].concat(numberRange(startNum + 1, endNum));

  // Cannot do numberRange(startNum + 1, endNum).unshift(startNum) because this does not return the base array. It just indicate the base array can be changed.
  // const result = numberRange(startNum + 1, endNum);
  // result.unshift(startNum);
  // return result;

  // Solution 2:
  // const result = numberRange(startNum, endNum - 1);
  // result.push(endNum);
  // return result;
}

module.exports = numberRange;
