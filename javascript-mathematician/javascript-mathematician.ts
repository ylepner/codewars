export function calculate(...args1: number[]) {
  let result = args1.reduce((a, b) => a + b)
  return function (...args2: number[]) {
    result += args2.reduce((a, b) => a + b)
    return result
  }
}
