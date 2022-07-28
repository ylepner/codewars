export function isValidIP(str: string) {
  if (str === '0.0.0.0') {
    return true
  }
  const strToArr = str.split('.')
  if (strToArr.length !== 4) {
    return false
  }
  const el = strToArr.filter((el: string) => (!Number(el) && el !== '0') || el.includes('\n')
    || el.match(/[a-z]/i) || el.includes('e') || Number(el) < 0 || Number(el) > 255
    || String(Number(el)).length !== el.length)
  if (el.length > 0) {
    return false;
  }
  return true
}