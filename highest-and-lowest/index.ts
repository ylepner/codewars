function highAndLow(numbersString: string) {
  const numbers = numbersString.split(' ').map(x => Number(x))
  return `${Math.max(...numbers)} ${Math.min.apply(null, numbers)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))