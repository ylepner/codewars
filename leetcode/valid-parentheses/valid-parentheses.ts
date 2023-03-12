export function isValid(s: string): boolean {
  const openParentheses = ['(', '{', '[']
  const closeParentheses = [')', '}', ']']
  let stack: number[] = []
  for (let symbol of s) {
    if (openParentheses.includes(symbol)) {
      stack.push(openParentheses.indexOf(symbol))
    } else if ((closeParentheses.includes(symbol)) && stack[stack.length - 1] === closeParentheses.indexOf(symbol)) {
      stack.pop()
    } else {
      return false
    }
  }
  if (stack.length) {
    return false
  }
  return true
};