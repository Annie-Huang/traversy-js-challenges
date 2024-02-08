function displayLikes(names) {
  let text = '';
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      text = `${names[0]} and ${names[1]}`;
      break;
    case 3:
      text = `${names[0]}, ${names[1]} and ${names[2]}`;
      break;
    default:
      text = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
  }
  return `${text} like this`;
}

module.exports = displayLikes;
