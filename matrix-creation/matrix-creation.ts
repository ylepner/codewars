export function getMatrix(number: number) {
  const result = []
  for (let i = 0; i < number; i++) {
    result.push(Array(number).fill(0))
    result[i][i] = 1
  }
  return result
} 