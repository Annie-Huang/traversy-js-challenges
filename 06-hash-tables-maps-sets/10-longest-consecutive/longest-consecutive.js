function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);
  const sortedNums = Array.from(numSet).sort((a, b) => (a > b ? 1 : -1));

  let longestSeq = 0;

  // sortedNums.forEach((num) => {
  //   let currentLength = 1;
  //   for (let i = sortedNums.indexOf(num); i < sortedNums.length - 1; i++) {
  //     if (sortedNums[i] + 1 === sortedNums[i + 1]) {
  //       currentLength++;
  //     } else {
  //       break;
  //     }
  //   }
  //
  //   longestSeq = Math.max(longestSeq, currentLength);
  // });

  // Brad's solution. Better one.
  numSet.forEach((num) => {
    let currentValue = num;
    let currentLength = 1;
    while (numSet.has(currentValue + 1)) {
      currentValue++;
      currentLength++;
    }

    longestSeq = Math.max(longestSeq, currentLength);
  });

  return longestSeq;
}

module.exports = longestConsecutiveSequence;
