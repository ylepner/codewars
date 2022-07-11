export function stray(numbers: number[]) {
  if (numbers.length < 3) {
    return 0;
  }
  let numbersCount: Record<number, number> = {}
  numbers.forEach((number) => {
    if (numbersCount[number]) {
      delete numbersCount[number]
    } else
      numbersCount[number] = 1
  })
  return Number(Object.keys(numbersCount).join(''))
}
