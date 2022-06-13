export function absentVowel(x: string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelsIndex: Record<string, number> = { 'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4 }
  for (let letter of x) {
    if (vowels.includes(letter)) {
      const index = vowels.indexOf(letter);
      if (index === -1) {
        return 0
      } else {
        vowels.splice(index, 1);
      }
    }
  }
  return vowelsIndex[vowels.toString()]
}