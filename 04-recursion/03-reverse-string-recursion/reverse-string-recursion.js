function reverseString(str) {
  if (str === '') return '';
  // if (str.length === 1) {
  //   return str;
  // }

  return reverseString(str.slice(1)) + str[0];
}

module.exports = reverseString;
