function removeDuplicates(arr) {
  const set = new Set();
  arr.map((item) => set.add(item));
  return Array.from(set);

  // Brad's solution:
  // return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
