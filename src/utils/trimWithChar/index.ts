/**
 * Trim a string with the given characters.
 * @param {string} str
 * @param {string} chars
 * @return {string}
 */
const trimWithChar = (str, chars) => {
  if (!chars) {
    return str;
  }
  if (!str) {
    return '';
  }

  let start = 0;
  let end = str.length - 1;
  while (chars.includes(str[start])) {
    start += 1;
  }
  while (chars.includes(str[end])) {
    end -= 1;
  }
  if (start > end) {
    return '';
  }
  return str.substring(start, end + 1);
};

export default trimWithChar;
