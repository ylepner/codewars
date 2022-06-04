export function explode(s: string) {
  let result = ''
  for (let digit of s) {
    for (let i = 0; i < Number(digit); i++) {
      result += digit
    }
  }
  return result
}
