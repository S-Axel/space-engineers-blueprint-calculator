/**
 * Rounds a number to the given decimal places, but removes trailing zeros and returns a string.
 * @param {number} num - The number to round.
 * @param {number} decimals - The number of decimal places to round to.
 * @returns {string} The rounded number as a string.
 */
import trimWithChar from '../trimWithChar';

const roundToDec = (num, decimals) => {
  const rounded = num.toFixed(decimals);
  return trimWithChar(rounded, '0.');
};

export default roundToDec;
