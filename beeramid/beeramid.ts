export function beeramid(bonus: number, price: number): number {
  let cans = Math.floor(bonus / price)
  let level = 0
  while ((level + 1) ** 2 <= cans) {
    level += 1
    cans -= (level * level)
  }
  return level
}