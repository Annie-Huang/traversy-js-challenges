const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

/**
 * some: Checks if at least one array element satisfies a condition.
 */

/**
 * every: Checks if all array elements satisfy a condition.
 */
