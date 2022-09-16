export function scramble(str1: string, str2: string) {
  const str1ToArr = str1.split('')
  const str2ToArr = str2.split('')
  const shortArr = defineWhichIsShorter(str1ToArr, str2ToArr)
  const longArr = defineWhichIsLonger(str1ToArr, str2ToArr)
  for (let i = 0; i < shortArr.length; i++) {
    if (longArr.includes(shortArr[i])) {
      longArr[longArr.indexOf(shortArr[i])] = ''
    } else {
      return false
    }
  }
  return true
}

function defineWhichIsShorter(arr1: string[], arr2: string[]) {
  if (arr1.length <= arr2.length) {
    return arr1
  }
  return arr2
}

function defineWhichIsLonger(arr1: string[], arr2: string[]) {
  if (arr1.length > arr2.length) {
    return arr1
  }
  return arr2
}