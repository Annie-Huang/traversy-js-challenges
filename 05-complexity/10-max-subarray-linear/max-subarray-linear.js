function maxSubarraySum(arr, k) {
  let currSum = 0;
  let maxSum;
  for (let i = 0; i < k; i++) {
    currSum += arr[i];
  }
  maxSum = currSum;

  for (let i = k; i < arr.length; i++) {
    maxSum = maxSum - arr[i - k] + arr[i];
    currSum = Math.max(currSum, maxSum);
  }
  return currSum;
}

module.exports = maxSubarraySum;
