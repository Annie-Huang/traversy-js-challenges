// quickSort use the same time complexity as merge sort but less memory allocation as it doesn't need to create temperate object to held the merged array
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  // Exclude the last element which is the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
