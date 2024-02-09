function findMissingLetter(arr) {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  if (!arr || arr.length === 0) return '';

  const isUpperCase = arr[0].toUpperCase() === arr[0];

  const startIndex = letters.indexOf(arr[0].toLowerCase());

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() !== letters[i + startIndex]) {
      return isUpperCase
        ? letters[i + startIndex].toUpperCase()
        : letters[i + startIndex].toLowerCase();
    }
  }
}

module.exports = findMissingLetter;
