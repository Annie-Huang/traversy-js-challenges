function isPalindrome(str) {
  const strWithoutSpecialChar = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // const strWithoutSpecialChar = str.replace(/[^\w\s]/, '');
  // console.log('strWithoutSpecialChar=', strWithoutSpecialChar);
  return (
    strWithoutSpecialChar.split('').reverse().join('') === strWithoutSpecialChar
  );
}

module.exports = isPalindrome;
