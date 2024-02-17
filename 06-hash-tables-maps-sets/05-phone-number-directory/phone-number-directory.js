function phoneNumberDirectory(phoneNumbers) {
  const result = new Map();
  for (const phoneNumber of phoneNumbers) {
    const phoneNumberArr = phoneNumber.split(':');
    result.set(phoneNumberArr[0], phoneNumberArr[1]);
  }
  return result;
}

module.exports = phoneNumberDirectory;
