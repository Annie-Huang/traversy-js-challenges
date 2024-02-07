function reverseString(str) {
  return str.split('').reverse().join('');

  // Another of Brad's solution:
  // let result = '';
  // for (let i = str.length - 1; i > -1; i--) {
  //   result += str[i];
  // }
  // return result;
}

module.exports = reverseString;
