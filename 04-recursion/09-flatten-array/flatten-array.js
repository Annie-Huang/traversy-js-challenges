function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    // Cannot just do 'result.concat(flattenArray(item))' because it doesn't change the result array, need to assign back.
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;
