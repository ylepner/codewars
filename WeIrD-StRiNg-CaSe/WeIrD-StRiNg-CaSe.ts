export function toWeirdCase(string: string) {
  const arrayOfStrings = string.split(' ')
  const result: string[] = []
  arrayOfStrings.forEach((string) => {
    result.push(' ')
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        result.push(string[i].toUpperCase())
      } else {
        result.push(string[i])
      }
    }
  })
  if (result) {
    result.shift()
  }
  return result.join('')
}