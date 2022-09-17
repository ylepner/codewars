export function scramble(str1: string, str2: string) {
  const letters: Record<string, number> = {}
  for (let letter of str1) {
    if (letters[letter]) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
  }
  for (let letter of str2) {
    if (letters[letter]) {
      if (letters[letter] > 0) {
        letters[letter] -= 1
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return true
}