function validatePassword(password) {
  const arr = password.split('');

  // a: 97, z: 122,
  // A: 65, Z: 90
  // 0: 48, 9: 57
  return (
    arr.length >= 8 &&
    arr.some(
      (letter) => letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122
    ) &&
    arr.some(
      (letter) => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90
    ) &&
    arr.some(
      (letter) => letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57
    )
  );

  // Solution 2:
  // return (
  //   arr.length >= 8 &&
  //   arr.some(
  //     (char) => char.toUpperCase() === char && char.toLowerCase() !== char
  //   ) &&
  //   arr.some(
  //     (char) => char.toUpperCase() !== char && char.toLowerCase() === char
  //   ) &&
  //   arr.some((char) => !isNaN(char))
  // );
}

module.exports = validatePassword;
