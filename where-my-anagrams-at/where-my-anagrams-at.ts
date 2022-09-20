export function anagrams(word: string, words: string[]): string[] {
  const letters: Record<string, number> = {}
  let result: string[] = []
  for (let letter of word) {
    if (letters[letter]) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
  }
  for (let word of words) {
    const copyLetters = { ...letters }
    for (let letter of word) {
      if (copyLetters[letter]) {
        if (copyLetters[letter] > 0) {
          copyLetters[letter] -= 1
        }
      } else {
        break
      }
    }
    if (Object.values(copyLetters).find((el) => el !== 0)) {
      continue
    } else {
      result.push(word)
    }
  }
  return result
}