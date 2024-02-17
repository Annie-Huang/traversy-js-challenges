function anagramGrouping(words) {
  const result = new Map();

  for (const word of words) {
    const key = word.split('').sort().join('');
    // Cannot use .push(word), otherwise, it will change the value to number 2 on the 2nd time rather than add value as [1stValue, 2ndValue];
    // result.set(key, result.has(key) ? result.get(key).push(word) : [word]);
    // Working solution
    // result.set(key, result.has(key) ? result.get(key).concat([word]) : [word]);

    result.has(key) ? result.get(key).push(word) : result.set(key, [word]);
  }

  return Array.from(result.values());
}

module.exports = anagramGrouping;
