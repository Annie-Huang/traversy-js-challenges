function diceGameSimulation(numSimulations) {
  const arr = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result;
    switch (sum) {
      case 7:
      case 11:
        result = 'win';
        break;
      case 2:
      case 3:
      case 12:
        result = 'lose';
        break;
      default:
        result = 'roll again';
    }

    arr.push({ dice1, dice2, sum, result });
  }
  return arr;
}

module.exports = diceGameSimulation;
