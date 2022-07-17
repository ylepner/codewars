interface Array<T> {
  reduce2<V>(process: (acc: V, el: T) => V, initial: V): V
}

Array.prototype.reduce2 = function (process, initial) {
  let i = 0
  if (initial == null) {
    initial = this[0]
    i = 1
  }
  let currentResult = initial
  for (; i < this.length; i++) {
    currentResult = process(currentResult, this[i])

  }
  return currentResult
}
