const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
  const arr = str.toLowerCase().split(/\W+/);

  const hashTable = new HashTable();
  arr.map((item) => {
    if (item === '') return;

    if (!hashTable.get(item)) {
      hashTable.set(item, 1);
    } else {
      hashTable.set(item, hashTable.get(item) + 1);
    }
  });

  return hashTable.get(word.toLocaleString());
}

module.exports = wordInstanceCounter;
