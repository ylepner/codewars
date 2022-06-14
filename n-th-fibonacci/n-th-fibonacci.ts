export function nthFiboRec(n: number): number {
  if (n === 1) return 0
  if (n <= 1) {
    return 1
  }
  else {
    return nthFiboRec(n - 1) + nthFiboRec(n - 2)
  }
}

export function nthFiboLoop(n: number): number {
  if (n === 1) {
    return 0
  }
  let first = 0
  let second = 1
  let sum = 0
  let count = 2
  while (count < n) {
    sum = first + second
    first = second
    second = sum
    count += 1
  }
  return second
}

