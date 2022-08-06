export function diagonal(n: number, p: number) {
  let sum = 0
  if (p === 0) {
    n += 1
  }
  for (let i = 1; i <= n; i++) {
    sum += binomialCoefficient(i, p)
  }
  return Math.floor(sum)
}

function factorial(n: number): number {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

function binomialCoefficient(n: number, k: number): number {
  return factorial(n) / (factorial(k) * factorial(n - k))
}