/**
 * Parses string for valid parentheses.
 *
 * @param {string} s
 * @return {boolean}
 */
 const isValid = s => {
  const brackets = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (brackets.has(char))
      stack.push(char)
    else {
      if (char === brackets.get(stack.at(-1))) stack.pop()
      else {
        return false
      }
    }
  }

  return !stack.length
}
