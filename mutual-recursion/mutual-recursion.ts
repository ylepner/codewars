export function F(n: number): number {
  if (n === 0) {
    return 1
  } else {
    return n - M(F(n - 1))
  }
}

export function M(n: number): number {
  if (n === 0) {
    return 0
  } else {
    return n - F(M(n - 1))
  }
}