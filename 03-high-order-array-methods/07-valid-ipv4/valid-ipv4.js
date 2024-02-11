const isValidIPv4 = (input) => {
  const arr = input.split('.');
  if (arr.length !== 4) return false;

  return arr.every((str) => {
    // This condition can be Number.parseInt(str).toString() === str;
    if (str.length > 1 && str.charAt(0) === '0') return false;

    return Number.parseInt(str) >= 0 && Number.parseInt(str) <= 255;
  });
};

module.exports = isValidIPv4;
