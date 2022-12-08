/**
 * Rounds a number to the given decimal places, but removes trailing zeros and returns a string.
 * @param {number} num - The number to round.
 * @param {number} decimals - The number of decimal places to round to.
 * @returns {string} The rounded number as a string.
 */
const roundToDec = (num, decimals) => {
  const rounded = num.toFixed(decimals);

  return rounded
    // trim 1.0 to 1
    .replace(/\.0+$/, '')
    // trim 1.10 to 1.1
    .replace(/(\.\d+?)0+$/, '$1');
};

export default roundToDec;
