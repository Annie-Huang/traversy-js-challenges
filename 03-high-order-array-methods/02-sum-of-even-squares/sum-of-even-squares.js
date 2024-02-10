function sumOfEvenSquares(numbers) {
  // can do Exponentiation (**) as well:
  // .map((number) => number ** 2)
  return numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = sumOfEvenSquares;
