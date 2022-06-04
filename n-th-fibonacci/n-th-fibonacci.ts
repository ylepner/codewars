export function nthFibo(n: number): number {
  if (n === 1) return 0
  if (n <= 1) {
    return 1
  }
  else {
    return nthFibo(n - 1) + nthFibo(n - 2)
  }
}