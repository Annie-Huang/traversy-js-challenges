function twoSum(nums, target) {
  // This is such a complicated solution to keep track, basically, for every item, we encounter, we will first add it into the numSet.
  // This is only when we find the 2nd number that has already have the 1nd number (target - 2nd number) in the numSet, then we will
  // log the i, i will always in the second of the return array, e.g. [nums.indexOf(complement), i]
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }

    numSet.add(nums[i]);
  }

  return [];
}

module.exports = twoSum;
