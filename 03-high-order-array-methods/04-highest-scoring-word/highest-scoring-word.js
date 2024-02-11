function highestScoringWord(str) {
  const letters = [
    '0',
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
  let highestScore = 0;
  let highestScoreWord = '';

  str.split(' ').map((word) => {
    // Array.from(word) === word.split('');
    const score = word
      .split('')
      .reduce(
        (accumulator, currentValue) =>
          accumulator + letters.indexOf(currentValue),
        0
      );

    if (score > highestScore) {
      highestScore = score;
      highestScoreWord = word;
    }
  });

  return highestScoreWord;
}

module.exports = highestScoringWord;
