function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];
  set1.forEach((value) => {
    if (!set2.has(value)) {
      result.push(value);
    }
  });
  set2.forEach((value) => {
    if (!set1.has(value)) {
      result.push(value);
    }
  });

  return result;
}

module.exports = symmetricDifference;
