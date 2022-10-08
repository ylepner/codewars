export function reverse(n: number) {
  const nArr = Array.from(String(Math.abs(n)))
  for (let i = 0; i < nArr.length / 2; i++) {
    const buf = nArr[i]
    nArr[i] = nArr[nArr.length - i - 1]
    nArr[nArr.length - i - 1] = buf
  }
  return Number(nArr.join(''))
}