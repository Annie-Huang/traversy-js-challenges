function findMiddle(list) {
  let slow = list.head; // slow pointer
  let fast = list.head; // fast pointer

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; // moves two nodes at a time
    slow = slow.next; // moves one node at a time
  }

  return slow; // returns the middle node

  // Brad's solution. I don't see the different in the last logic
  // At the end of the day.
  // prev.next will always === slow.

  // Both fast and slow start at the head
  // let slow = list.head;
  // let fast = list.head;
  // // prev starts at null
  // let prev = null;
  //
  // // Loop through the list
  // while (fast !== null && fast.next !== null) {
  //   // Move fast forward by 2 nodes
  //   fast = fast.next.next;
  //   // Move slow forward by 1 node
  //   prev = slow;
  //   slow = slow.next;
  // }
  //
  // if (fast === null) {
  //   // Even number of nodes
  //   return prev.next;
  // } else {
  //   // Odd number of nodes
  //   return slow;
  // }
}

module.exports = findMiddle;
