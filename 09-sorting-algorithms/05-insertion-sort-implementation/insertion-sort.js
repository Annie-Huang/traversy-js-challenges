function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    // console.log(arr[i], arr[j]);

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;

    // console.log(arr);
    // console.log('-------------------------------');
  }

  return arr;
}

module.exports = insertionSort;
