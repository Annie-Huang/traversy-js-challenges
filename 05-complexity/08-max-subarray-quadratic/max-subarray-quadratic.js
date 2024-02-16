function maxSubarraySum(arr, k) {
  const resultArray = [];
  for (let i = 0; i < arr.length - k; i++) {
    let currentResult = 0;
    for (let j = i; j < i + k; j++) {
      currentResult += arr[j];
    }
    resultArray.push(currentResult);
  }
  return Math.max(...resultArray);

  // Solution 2:
  // let result;
  // for (let i = 0; i < arr.length - k; i++) {
  //   let currentResult = 0;
  //   for (let j = i; j < i + k; j++) {
  //     currentResult += arr[j];
  //   }
  //   result =
  //     result === undefined ? currentResult : Math.max(result, currentResult);
  // }
  // return result;
}

module.exports = maxSubarraySum;
