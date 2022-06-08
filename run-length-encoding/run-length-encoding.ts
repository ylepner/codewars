export const runLengthEncoding = function (str: string) {
  if (str === '') {
    return []
  }
  const result: Array<[number, string]> = []
  let count = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1
      continue
    }
    result.push([count, str[i]])
    count = 1
  }
  return result
}