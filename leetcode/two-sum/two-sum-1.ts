export function twoSum1(nums: number[], target: number) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)
        return result
      }
    }
  }
  return []

}


