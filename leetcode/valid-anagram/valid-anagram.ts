export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  let letters: Record<string, number> = {}
  for (let char of s) {
    if (letters[char]) {
      letters[char] += 1
    } else {
      letters[char] = 1
    }
  }
  for (let char of t) {
    if (!letters[char]) {
      return false
    } else {
      letters[char] -= 1
      if (letters[char] < 0) {
        return false
      }
    }
  }
  return true
};