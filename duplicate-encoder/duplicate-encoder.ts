export function duplicateEncode(word: string): string {
  if (word.length === 1) {
    return '('
  }
  word = word.toLowerCase()
  let charCounter: Record<string, number> = {}
  for (let character of word) {
    if (charCounter[character]) {
      charCounter[character] += 1
    } else {
      charCounter[character] = 1
    }
  }
  let result = ''
  for (let character of word) {
    if (charCounter[character] === 1) {
      result += '('
    } else {
      result += ')'
    }
  }
  return result
}
