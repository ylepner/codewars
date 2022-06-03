function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)
  return `${Math.max.apply(null, numbers)} ${Math.min.apply(null, numbers)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))