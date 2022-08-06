export function generateDiagonal(n: number, l: number) {
  let result = []
  for (let i = n; i < l + n; i++) {
    result.push(binomialCoefficient(i, n))
  }
  return result
}

function factorial(n: number): number {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

function binomialCoefficient(n: number, k: number): number {
  return Math.round(factorial(n) / (factorial(k) * factorial(n - k)))
}