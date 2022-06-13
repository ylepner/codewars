interface String {
  toJadenCase(): string
}

String.prototype.toJadenCase = function () {
  const str = this
  const splitStr = str.split(' ')
  for (let i = 0; i < splitStr.length; i++) {
    const word = splitStr[i]
    splitStr[i] = word[0].toUpperCase() + word.slice(1)
  }
  return splitStr.join(' ')
};