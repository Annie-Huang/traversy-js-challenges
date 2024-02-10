function validateEmail(email) {
  const firstIndex = email.split('').indexOf('@');
  const secondIndex = email.split('').lastIndexOf('.');
  return (
    firstIndex > 0 &&
    secondIndex > -1 &&
    secondIndex < email.length - 1 &&
    firstIndex < secondIndex
  );

  // Incorrect
  // const regex = new RegExp(/\s@\s.\s/g);
  // return regex.test(email);
}

module.exports = validateEmail;
