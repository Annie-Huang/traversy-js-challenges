function permutations(str) {
  /*
   * The logic is, let's say we got 'abcd'
   * we first subtract a, and then we do permutations on 'bcd', let's say it return '123', '231', '312'
   * so it will be a123, a231, a312
   * then we subtract b, and then we do permutations on 'acd', let's say it return '123', '231', '312'
   * so it will be b123, b231, b312
   * */

  // I think the logic is very hard to think of....

  let result = [];

  if (str.length === 0) {
    result.push('');
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const restOfStr = str.substring(0, i) + str.substring(i + 1);
    permutations(restOfStr).forEach((item) => {
      result.push(letter + item);
    });
  }

  return result;
}

module.exports = permutations;
