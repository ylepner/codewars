export function getMiddle(s: string): string {
  let middle: string
  if (s.length % 2 != 0) {
    middle = s[Math.floor(s.length / 2)]
  } else {
    middle = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]
  }
  return middle
}