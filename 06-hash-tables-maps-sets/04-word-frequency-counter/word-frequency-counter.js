function wordFrequencyCounter(str) {
  const result = new Map();
  const wordOnlyStr = str.replace(/[^a-zA-Z ]/g, '').toLowerCase();

  if (wordOnlyStr === '') return result;

  wordOnlyStr.split(' ').forEach((word) => {
    result.set(word, result.has(word) ? result.get(word) + 1 : 1);
  });
  return result;

  // Solution 2:
  // https://www.w3schools.com/jsref/jsref_regexp_wordchar_non.asp	<--- List all the metacharaers match cases mean.
  // The \W metacharacter matches non-word characters:
  // A word character is a character a-z, A-Z, 0-9, including _ (underscore).

  // const words = str.toLowerCase().split(/\W+/);
  // const result = new Map();
  //
  // for (const word of words) {
  //   if (word === '') continue;
  //   result.set(word, result.has(word) ? result.get(word) + 1 : 1);
  // }
  //
  // return result;
}

module.exports = wordFrequencyCounter;
