function generateHashtag(str) {
  if (str.trim() === '') return false;

  // Can do str.trim().split(/\s+/); to break on whitespace
  // charAt(0) === slice(0, 1)
  const hasTag =
    '#' +
    str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  return hasTag.length > 140 ? false : hasTag;
}

module.exports = generateHashtag;
