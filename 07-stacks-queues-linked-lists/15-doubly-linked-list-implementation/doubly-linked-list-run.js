const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');
list.insertAt(2, 'World');

list.printAll();

// console.log(list.get(2).data);

list.remove(2);
console.log('-----------');

list.printAll();

console.log(list.contains('World'));
console.log(list.contains(1));
