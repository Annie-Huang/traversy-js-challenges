function arrayIntersection(arr1, arr2) {
  // intersection is not supported by Firefox and Opera
  // return Array.from(new Set(arr1).intersection(new Set(arr2)));

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  set1.forEach((item) => {
    if (!set2.has(item)) {
      set1.delete(item);
    }
  });
  return Array.from(set1);
}

module.exports = arrayIntersection;
