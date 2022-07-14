interface Array<T> {
  square(): number[],
  cube(): number[],
  average(): number | undefined,
  sum(): number,
  even(): number[],
  odd(): number[]
}

Array.prototype.square = function () {
  return this.map((el: number) => el ** 2)
}

Array.prototype.cube = function () {
  return this.map((el: number) => el ** 3)
}

Array.prototype.average = function () {
  if (!this.length) {
    return NaN
  }
  return this.reduce((a: number, b: number) => a + b) / this.length
}

Array.prototype.sum = function () {
  return this.reduce((a: number, b: number) => a + b)
}

Array.prototype.even = function () {
  return this.filter((el: number) => el % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter((el: number) => el % 2 !== 0)
}