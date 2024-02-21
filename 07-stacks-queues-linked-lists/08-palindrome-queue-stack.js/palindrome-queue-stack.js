const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  const formattedStr = str.toLowerCase().split(/\W+/).join('');
  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < formattedStr.length; i++) {
    queue.enqueue(formattedStr[i]);
    stack.push(formattedStr[i]);
  }

  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromeQueueStack;
