const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();

  // str.split('').forEach((char) => {
  //   stack.push(char);
  // });

  // Don't need to create another structure.
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let result = '';
  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
}

module.exports = reverseStringStack;
