export function numberOfPairs(gloves: string[]): number {
  const glovesObj: Record<string, number> = {}
  let count: number = 0
  for (let glove of gloves) {
    if (glovesObj[glove]) {
      glovesObj[glove] += 1
      if (glovesObj[glove] === 2) {
        count += 1
        glovesObj[glove] = 0
      }
    } else {
      glovesObj[glove] = 1
    }
  }
  return count
}