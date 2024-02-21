const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  const linkedList = new LinkedList();

  // for (let i = 0; i < str.length; i++) {
  //   linkedList.insertAt(0, str[i]);
  // }
  //
  // let result = '';
  // while (linkedList.head !== null) {
  //   result += linkedList.get(0);
  //   linkedList.removeFrom(0);
  // }

  // Brad's solution. It's a better one because it doesn't delete from the linkedList.
  for (let i = str.length - 1; i > -1; i--) {
    linkedList.add(str[i]);
  }
  let result = '';
  let current = linkedList.head;
  while (current !== null) {
    result += current.data;
    current = current.next;
  }

  return result;
}

module.exports = reverseStringLinkedList;
