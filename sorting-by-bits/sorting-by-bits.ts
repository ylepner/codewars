export function sortByBit(arr: number[]): number[] {
  const bitCounter: Record<number, number> = {}
  function getBitsCount(num: number) {
    if (bitCounter[num]) {
      return bitCounter[num]
    }
    let bits = num.toString(2)
    let count = 0
    for (let char of bits) {
      if (char === '1') {
        count += 1
      }
    }
    bitCounter[num] = count
    return count
  }

  arr.sort((a, b) => {
    if (getBitsCount(a) === getBitsCount(b)) {
      return a - b
    }
    return getBitsCount(a) - getBitsCount(b)
  })
  return arr
}


