function findFirstNonRepeatingCharacter(str) {
  const arr = str.split('');
  let currentLetter = arr[0];
  let currentLetterCount = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentLetter !== arr[i] && currentLetterCount !== 0) {
      currentLetter = arr[i];
      currentLetterCount = 0;
    } else if (currentLetter !== arr[i] && currentLetterCount === 0) {
      return currentLetter;
    } else {
      currentLetterCount++;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
