export function find(object: any, path: string) {
  let currentObj = object
  const steps = path.split('.')
  for (let step of steps) {
    if (!currentObj.hasOwnProperty(step)) {
      return undefined
    }
    currentObj = currentObj[step]
  }
  return currentObj
}