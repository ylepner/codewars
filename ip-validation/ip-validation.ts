export function isValidIP(str: string) {
  const strToArr = str.split('.')
  if (strToArr.length !== 4) {
    return false
  }
  const hasInvalidElements = strToArr.some((el: string) => {
    const num = Number.parseInt(el);
    return Number.isNaN(num) || num < 0 || num > 255 || String(num).length !== el.length
  })
  return !hasInvalidElements;
}