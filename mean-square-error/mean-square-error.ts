export function solution(firstArray: number[], secondArray: number[]): number {
  let sum = 0
  for (let i = 0; i <= firstArray.length - 1; i++) {
    const squaredDiff = Math.pow((firstArray[i] - secondArray[i]), 2)
    sum += squaredDiff
  }
  return sum / firstArray.length
}