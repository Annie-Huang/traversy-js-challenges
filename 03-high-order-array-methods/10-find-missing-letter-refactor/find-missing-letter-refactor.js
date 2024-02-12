function findMissingLetter(arr) {
  const charCodeArr = arr.map((char) => char.charCodeAt(0));
  const firstCharCode = charCodeArr[0];
  const letterAfterTheMissingLetter = charCodeArr.find(
    (item, index) => item !== firstCharCode + index
  );
  return letterAfterTheMissingLetter
    ? String.fromCharCode(letterAfterTheMissingLetter - 1)
    : '';
}

module.exports = findMissingLetter;
