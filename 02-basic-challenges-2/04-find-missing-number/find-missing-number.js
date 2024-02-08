function findMissingNumber(arr) {
  // if (!arr) return undefined;
  if (arr.length === 0) return 1;

  let num = 1;
  const sortedArr = arr.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== i + 1) {
      return i + 1;
    }
  }

  // const n = arr.length + 1;
  // const correctValue = (n * (n + 1)) / 2;
  // const actualValue = arr.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );
  // return correctValue - actualValue;
}

module.exports = findMissingNumber;
