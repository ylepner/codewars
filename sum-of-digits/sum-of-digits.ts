export function digital_root(n: number): number {
  const sumOfDigits = n.toString().split('').map((el) => Number(el)).reduce((a: number, b: number) => a + b)
  if (sumOfDigits > 9) {
    return digital_root(sumOfDigits)
  }
  return sumOfDigits
}