export function beeramid(bonus: number, price: number): number {
  let cans = Math.floor(bonus / price)
  let level = 0
  let count = cans - (level * level)
  while ((level + 1) ** 2 <= cans) {
    level += 1
    cans -= (level * level)
  }
  return level
}