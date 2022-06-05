export function getLengthOfMissingArray(arrayOfArrays: (any | null)[][] | null | undefined) {
  if (!arrayOfArrays) return 0
  if (arrayOfArrays.length === 0) return 0;
  const lengths = []
  for (let arr of arrayOfArrays) {
    if (!arr) return 0;
    lengths.push(arr.length)
  }
  lengths.sort((a, b) => a - b);
  if (lengths[0] === 0) {
    return 0
  }
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i + 1] - lengths[i] !== 1) {
      return lengths[i] + 1
    }
  }
}
