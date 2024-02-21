const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
  }
  let result = '';
  while (!queue.isEmpty()) {
    result = queue.dequeue() + result;
  }

  // Brad's solution:
  // for (let i = str.length - 1; i > -1; i--) {
  //   queue.enqueue(str[i]);
  // }
  // let result = '';
  // while (!queue.isEmpty()) {
  //   result += queue.dequeue();
  // }

  return result;
};

module.exports = reverseStringWithQueue;
