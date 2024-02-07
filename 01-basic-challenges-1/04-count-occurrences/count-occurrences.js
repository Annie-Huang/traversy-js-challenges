function countOccurrences(str, char) {
  return str.split('').filter((c) => c === char).length;

  // Brad's answer
  // return str.split(char).length - 1;
}

module.exports = countOccurrences;
