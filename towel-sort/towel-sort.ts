export function towelSort(matrix?: number[][]) {
  if (!matrix) {
    return []
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse()
    }
  }
  return matrix.flat();
}