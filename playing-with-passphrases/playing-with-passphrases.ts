export function playPass(s: string, n: number) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let result = ''
  let el = ''
  for (let i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i].toUpperCase())) {
      let letterPosition = alphabet.indexOf(s[i]) + n
      const newPosition = letterPosition % alphabet.length
      if (i % 2 === 0) {
        el = alphabet[newPosition].toUpperCase()
      } else {
        el = alphabet[newPosition].toLocaleLowerCase()
      }
    }
    if (/[0-9]/g.test(s[i])) {
      el = String((9 - Number(s[i])))
    }
    if (s[i] === ' ') {
      el = ' '
    }
    if (/[^A-Za-z 0-9]/g.test(s[i])) {
      el = s[i]
    }
    result += el
  }
  return result.split('').reverse().join('')
}
