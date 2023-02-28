function stringLength(str) {
  if (str.length >= 1 && str.length <= 10) {
    return 'success';
  }
  throw new Error('error count of string is too long');

  //   return str.length;
}

module.exports = stringLength;