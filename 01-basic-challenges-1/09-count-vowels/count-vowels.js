function countVowels(str) {
  return str
    .toLowerCase()
    .split('')
    .filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char)).length;
}

module.exports = countVowels;
