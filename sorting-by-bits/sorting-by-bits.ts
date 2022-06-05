export function sortByBit(arr: number[]): number[] {
  arr.sort((a, b) => {
    if (getBitsCount(a) === getBitsCount(b)) {
      return a - b
    }
    return getBitsCount(a) - getBitsCount(b)
  })
  return arr
}

function getBitsCount(num: number) {
  let bits = num.toString(2)
  let count = 0
  for (let char of bits) {
    if (char === '1') {
      count += 1
    }
  }
  return count
}
