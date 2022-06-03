export function isIsogram(str: string): boolean {
  let lettersCounter = {}
  for (let letter of str) {
    if (lettersCounter[letter.toLowerCase()]) {
      return false
    } else {
      lettersCounter[letter] = 1
    }
  }
  return true
}
