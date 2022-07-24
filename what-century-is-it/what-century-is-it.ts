export function whatCentury(year: string) {
  let result = ''
  const century = Math.ceil(Number(year) / 100);
  result += century
  const numberEnding = century % 10
  const ordinalNumbersEndings: Record<string, string> = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    11: 'th',
    12: 'th',
    13: 'th'
  }
  if (ordinalNumbersEndings[result]) {
    return result += ordinalNumbersEndings[result]
  }
  const ending = ordinalNumbersEndings[numberEnding]
  if (ending) {
    return result += ending
  }
  return result += 'th'
}