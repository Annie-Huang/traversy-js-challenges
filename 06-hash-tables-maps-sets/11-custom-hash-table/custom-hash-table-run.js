const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

const result = myHashTable._hash('John', myHashTable.limit);
// console.log(result);
// 7

myHashTable.printTable();
// []

// myHashTable.set('John', '555-234-3544');
// myHashTable.set('James', '555-384-5523');
// myHashTable.set('Sara', '555-469-3334');
// myHashTable.printTable();

myHashTable.set('John', '555-234-3544');
myHashTable.set('James', '555-384-5523');
myHashTable.set('Sara', '555-469-3334');
console.log(myHashTable.get('Sara'));
console.log(myHashTable.get('test'));

myHashTable.remove('James');
console.log(myHashTable.get('James'));
// myHashTable.printTable();

console.log(myHashTable.has('James'));
console.log(myHashTable.has('John'));

myHashTable.clear();
myHashTable.printTable();
