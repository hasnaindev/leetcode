/**
 * Finds the longest common
 * prefix.
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let buffer = ''
  let prefix = strs[0]

  for (const str of strs) {
    for (let i = 0; i < str.length; i++) {
      if (prefix[i] !== str[i])
        break
      buffer += str[i]
    }

    prefix = buffer
    buffer = ''
  }

  return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(['ab', 'a']))
