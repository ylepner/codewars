export function isPalindrome(s: string): boolean {
  const toLowerCase = s.toLocaleLowerCase()
  const str = toLowerCase.replace(/[^A-Za-z0-9]/g, '')
  for (let i = 0; i < str.length / 2; i++) {
    const head = str[i]
    const tail = str[str.length - 1 - i]
    if (head !== tail) {
      return false
    }
  }
  return true
};