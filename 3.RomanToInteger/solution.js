/**
 * A map that contains integer values
 * for roman numberic number system.
 */
 const romanNumbersMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

/**
 * Converts a roman number into an
 * integer.
 *
 * @param {string} str
 * @return {number}
 */
const romanToInt = str => {
  if (str.length <= 1)
    return romanNumbersMap.get(str)

  let result = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    const numberOne = romanNumbersMap.get(str[i])
    const numberTwo = romanNumbersMap.get(str[i - 1])

    if (numberTwo < numberOne) {
      i--
      result += numberOne - numberTwo
    } else
      result += numberOne
  }

  return result
}

console.log(romanToInt('MCMXCIV'))

/**
  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
