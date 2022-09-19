export function rgb(r: number, g: number, b: number): string {
  const arg = [r, g, b]
  let result = ''
  for (let argument of arg) {
    if (argument < 0) {
      argument = 0
    }
    if (argument > 255) {
      argument = 255
    }
    const hexNum = parseInt(String(argument), 10).toString(16)
    if (hexNum.length < 2) {
      result += 0 + hexNum
    } else {
      result += hexNum
    }
  }
  return result.toUpperCase()
}