export function formatDuration(seconds: number) {
  const secondsObj: Record<string, number> = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60
  }

  const data: Record<string, number> = {}

  if (seconds === 0) {
    return 'now'
  }

  for (let key in secondsObj) {
    if (seconds >= secondsObj[key]) {
      const amountInSec = (Math.floor((seconds / secondsObj[key])))
      if (amountInSec > 0) {
        data[key] = amountInSec
        seconds = seconds % secondsObj[key]
      }
    }
  }
  if (seconds > 0) {
    data['second'] = seconds
  }
  const dataArr = Object.entries(data)
  let result = ''
  if (dataArr.length === 1) {
    if (dataArr[0][1] !== 1) {
      return result += `${dataArr[0][1]} ${dataArr[0][0]}s`
    }
    return result += `${dataArr[0][1]} ${dataArr[0][0]}`
  }

  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i + 1] && dataArr[i + 1][1] !== 0) {
      if (i === 0) {
        result += `${dataArr[i][1]}`
      } else {
        result += `, ${dataArr[i][1]}`
      }
      if (dataArr[i][1] !== 1) {
        result += ` ${dataArr[i][0]}s`
      } else {
        result += ` ${dataArr[i][0]}`
      }
    } else {
      if (dataArr[i][1] !== 1) {
        result += ` and ${dataArr[i][1]} ${dataArr[i][0]}s`
      } else {
        result += ` and ${dataArr[i][1]} ${dataArr[i][0]}`
      }
    }
  }
  return result
}