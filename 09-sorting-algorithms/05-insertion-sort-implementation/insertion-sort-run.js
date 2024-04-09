const insertionSort = require('./insertion-sort');

const array = [4, 3, 2, 10, 12, 1, 5, 6];

const result = insertionSort(array);

console.log(result);

// i = 1, j = 0, currEl = arr[0] = 3, arr[1] = 4, j = -1, arr[0] = 3;
// 3, 4, 2, 10, 12, 1, 5, 6

// i=2; currEl=2; j=1; arr[2] = arr[1]=4;
// 3,4,4,10,12,1,5,6
// j=0; arr[1] = arr[0]=3, j-1;
// 3,3,4,10,12,1,5,6,
// arr[0] = 2;
// 2,3,4,10,12,1,5,6,
