export function ascendDescend(length: number, minimum: number, maximum: number) {
  let result = ''
  let isAsc = true
  if (minimum === maximum) {
    result = String(minimum).repeat(length)
  }
  if (minimum > maximum) {
    return ''
  }
  for (let i = minimum; result.length < length;) {
    if (i === maximum) {
      isAsc = false
    }
    if (i === minimum) {
      isAsc = true
    }
    if (isAsc) {
      result += i
      i++
    } else {
      result += i
      i--
    }
  }
  return result.slice(0, length)
}