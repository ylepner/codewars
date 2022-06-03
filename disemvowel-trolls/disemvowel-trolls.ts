export function disemvowel(str: string): string {
  const vowels = 'A E I O U a e i o u'
  const strToArr = str.split('').map((letter) => {
    if (letter === ' ') {
      return letter
    }
    if (!vowels.includes(letter)) {
      return letter
    } else {
      return ''
    }
  })
  return strToArr.join('')
} 