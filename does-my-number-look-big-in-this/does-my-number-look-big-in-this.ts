export function narcissistic(value: number) {
  const valueToStr = String(value)
  let result = 0
  for (let digit of valueToStr) {
    result += Math.pow(Number(digit), valueToStr.length)
  }
  return result === value
}