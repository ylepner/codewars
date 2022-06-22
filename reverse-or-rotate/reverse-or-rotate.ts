export function revrot(str: string, sz: number): string {
  if (sz <= 0 || str === "" || sz > str.length) {
    return ""
  }

  let arrayOfChunks: string[] = []

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz)
    if (chunk.length === sz) {
      arrayOfChunks.push(chunk)
    }
  }

  let result: string = ''

  for (let el of arrayOfChunks) {
    let strForSum = 0
    for (let dig of el) {
      strForSum += Number(dig)
    }
    let modifiedStr
    if (strForSum % 2 === 0) {
      modifiedStr = reverse(el)

    } else {
      modifiedStr = rotate(el)
    }
    result += modifiedStr
  }
  return result
}

function reverse(str: string) {
  return str.split('').reverse().join('');
}

function rotate(str: string) {
  let elSplit = str.split('')
  let first = elSplit.shift();
  if (first) {
    elSplit.push(first)
  }
  return elSplit.join('')
}