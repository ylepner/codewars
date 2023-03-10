export function twoSum2(nums: number[], target: number) {
  const numDict = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (numDict.has(diff)) {
      return [numDict.get(diff), i]
    } else {
      numDict.set(nums[i], i)
    }
  }
  return []
}