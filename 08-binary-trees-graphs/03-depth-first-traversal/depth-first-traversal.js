const Stack = require('./stack');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  // const stack = [];
  const stack = new Stack();

  stack.push(root);

  // while (stack.length > 0) {
  while (!stack.isEmpty()) {
    const current = stack.pop();
    // console.log(current);
    result.push(current.data);

    // Push from right side first and then left side later because it will pop the left side first.
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
