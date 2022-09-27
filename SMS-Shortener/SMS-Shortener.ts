export function shortener(message: string): string {
  const diff = message.length - 160
  if (diff <= 0 || !message.includes(' ')) {
    return message
  }
  const messageArr = message.split(' ')
  const messageArrRev = message.split(' ').reverse()
  const newArr = []
  const sliceArr = messageArrRev.slice(0, diff)
  for (let i = 0; i < diff; i++) {
    if (!sliceArr[i]) {
      return newArr.reverse().join('')
    }
    const toUpperCase = sliceArr[i][0].toUpperCase() + sliceArr[i].slice(1)
    newArr.push(toUpperCase)
  }
  const str = newArr.reverse().join('')
  const arrSlice = messageArr.slice(0, messageArr.length - diff)
  const result = arrSlice.join(' ') + str
  return result
}