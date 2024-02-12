function analyzeCarMileage(cars) {
  const sortedCars = cars.sort((a, b) => (a.mileage > b.mileage ? 1 : -1));

  // toSorted will not change the original array. But it is only supported in node 20+ but I currently use node 16.
  // const sortedCars = cars.toSorted((a, b) => (a.mileage > b.mileage ? 1 : -1));
  const totalMileage = cars.reduce(
    (accumulator, currentValue) =>
      accumulator + Number.parseInt(currentValue.mileage),
    0
  );

  return {
    averageMileage: Number.parseFloat((totalMileage / cars.length).toFixed(2)),
    highestMileageCar: sortedCars.at(-1),
    lowestMileageCar: sortedCars[0],
    totalMileage,
  };

  // Solution 2:
  // const highestMileageCar = cars.reduce((accumulator, currentValue) => {
  //   return accumulator.mileage < currentValue.mileage
  //     ? currentValue
  //     : accumulator;
  // }, cars[0]);
  // const lowestMileageCar = cars.reduce((accumulator, currentValue) => {
  //   return accumulator.mileage > currentValue.mileage
  //     ? currentValue
  //     : accumulator;
  // }, cars[0]);
  //
  // return {
  //   averageMileage: Number.parseFloat((totalMileage / cars.length).toFixed(2)),
  //   highestMileageCar,
  //   lowestMileageCar,
  //   totalMileage,
  // };
}

module.exports = analyzeCarMileage;
