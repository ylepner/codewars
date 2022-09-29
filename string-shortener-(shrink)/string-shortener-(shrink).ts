export function shorten(string: string, length: number, glue = '...'): string {
  if (string.length <= length) {
    return string
  }
  if ((length - glue.length) <= 1) {
    return string.slice(0, length)
  }
  const shrinkValue = Math.floor(length - glue.length) / 2
  const result = string.slice(0, shrinkValue) + glue + string.slice(defineShrink(length, glue.length, shrinkValue))
  return result
}

function defineShrink(length: number, glueLength: number, shrinkValue: number) {
  if ((length - glueLength) % 2 !== 0) {
    return (-shrinkValue - 1)
  } else {
    return -shrinkValue
  }
}