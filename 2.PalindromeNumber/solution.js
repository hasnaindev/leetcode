/**
 * Checks whether a number is palindrome.
 *
 * @param {number} x
 * @return {boolean}
 * @see https://leetcode.com/problems/palindrome-number/
 */
const isPalindrome = x => {
  let n = x
  let reverse = 0

  while (n > 0) {
    reverse = (reverse * 10) + n % 10
    n = Math.floor(n / 10)
  }

  return x === reverse
}
