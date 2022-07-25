export function arrayDiff(a: number[], b: number[]) {
  let result = a
  b.forEach((number) => {
    result = result.filter((el) => el !== number)
  })
  return result
}