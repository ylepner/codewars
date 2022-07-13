interface Object {
  hash(string: string): string | undefined
}

Object.prototype.hash = function (str: string) {
  let pathArray = str.split('.')
  let currentObject = this

  for (let i = 0; i < pathArray.length; i++) {
    currentObject = currentObject[pathArray[i]]
    if (!currentObject) {
      return currentObject
    }
  }
  return currentObject
}
