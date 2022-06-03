export function highAndLow(numbersString: string): string {
  const numbers = numbersString.split(' ').map((number) => Number(number))
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
