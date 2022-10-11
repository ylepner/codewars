export function findMaxSum(numbers: number[]) {
  let max1: number = -Infinity;
  let max2: number = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max1) {
      max2 = max1
      max1 = numbers[i]
    } else if (numbers[i] > max2) {
      max2 = numbers[i]
    }
  }
  return max1 + max2
}