export function check(str: string, bracketsConfig: string[][]) {
  let openBrackets: string[] = []
  let closeBrackets: string[] = []
  let stackArr = []
  bracketsConfig.forEach((arr) => {
    openBrackets.push(arr[0]);
    closeBrackets.push(arr[1])
  })
  for (let el of str) {
    if (openBrackets.includes(el)) {
      stackArr.push(el)
    } else if (closeBrackets.includes(el)) {
      if (stackArr.length === 0) {
        return false
      }
      if (openBrackets.indexOf(stackArr[stackArr.length - 1]) === closeBrackets.indexOf(el)) {
        stackArr.pop()
      }
    }
  }

  if (stackArr.length === 0) {
    return true
  }
  return false
}

