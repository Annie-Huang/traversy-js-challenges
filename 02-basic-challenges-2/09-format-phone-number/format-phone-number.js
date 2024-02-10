function formatPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr
    .slice(6)
    .join('')}`;

  // Brad's second solution
  // const str = arr.join('');
  // return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}

module.exports = formatPhoneNumber;
