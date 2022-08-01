export function twistedSum(n: number) {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (i < 10) {
      count += i
    } else {
      count += String(i).split('').map((el) => Number(el)).reduce((a: number, b: number) => a + b)
    }
  }
  return count;
}