export function dataReverse(data: number[]) {
  let result = []
  for (let i = 0; i <= data.length; i += 8) {
    result.unshift(data.slice(i, 8 + i))
  }
  return result.flat()
}