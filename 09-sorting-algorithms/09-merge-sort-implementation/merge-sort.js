function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let merged = [];

  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // console.log('left=', left);
  // console.log('right=', right);
  // console.log('merged=', merged);
  // console.log('leftIndex=', leftIndex);
  // console.log('rightIndex=', rightIndex);
  // console.log('------------------------------------');

  // Don't need to check the leftIndex and rightIndex to see which one to concat, just concat all.
  // But remember each time the concat will need to assign back to the merged array. It does not auto change it's array
  merged = merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  return merged;
}

module.exports = mergeSort;
