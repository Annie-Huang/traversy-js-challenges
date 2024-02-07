function findMaxNumber(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1)).at(-1);

  // Brad's solution
  // return Math.max(...arr);

  /*  let result = arr[0];

  // for (let i = 1; i < arr.length; i++) {
  //   result = result > arr[i] ? result : arr[i];
  // }
  for (const item of arr) {
    result = result > item ? result : item;
  }

  return result;*/
}

module.exports = findMaxNumber;
