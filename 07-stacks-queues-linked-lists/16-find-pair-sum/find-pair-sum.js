const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, targetSum) {
  // const doubleLL = new DoublyLinkedList();
  //
  // for (let i = 0; i < nums.length; i++) {
  //   doubleLL.append(nums[i]);
  // }
  //
  // let currentNode = doubleLL.head;
  // while (currentNode !== null) {
  //   let targetNode = currentNode.next;
  //   while (targetNode !== null) {
  //     if (targetNode.data === targetSum - currentNode.data) {
  //       return [currentNode.data, targetNode.data];
  //     }
  //
  //     targetNode = targetNode.next;
  //   }
  //
  //   currentNode = currentNode.next;
  // }
  //
  // return null;

  // Brad's solution, only add into the DoubleLinkedList if we cannot find the different in the DoubleLinkedList
  // Actually good solution, only need to loop through once rather than 3 times.

  // Init a doubly linked list to keep track of seen numbers
  const seen = new DoublyLinkedList();

  // Loop through nums
  for (const num of nums) {
    // Calculate the difference between the target sum and the current number
    const difference = targetSum - num;
    // If the difference is in the seen list, return the pair
    if (seen.contains(difference)) {
      return [difference, num];
    }
    // Otherwise, add the current number to the seen list
    seen.append(num);
  }

  // If no pair is found, return null
  return null;
}

module.exports = findPairSum;
