const HashTable = require('./HashTable');

function anagramGrouping(words) {
  const hashTable = new HashTable();

  words.forEach((word) => {
    const key = word.split('').sort().join('');

    if (hashTable.get(key)) {
      hashTable.get(key).push(word);
    } else {
      hashTable.set(key, [word]);
    }
  });

  return hashTable.getValues();
}

module.exports = anagramGrouping;
