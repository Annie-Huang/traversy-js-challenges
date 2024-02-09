function areAllCharactersUnique(str) {
  if (str === '') return true;

  const set = new Set();
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return false;
    } else {
      set.add(arr[i]);
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
