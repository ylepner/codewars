export function kiyoLcm(a: Array<Array<any>>) {
  const resultArr = []
  for (let arr of a) {
    if (arr.length !== 0) {
      resultArr.push(arr.filter((el: any) => typeof el === 'number' && el % 2 !== 0).reduce((a: number, b: number) => a + b))
    }
    else {
      continue
    }
  }
  if (resultArr.length !== 0) {
    const nok = findNok(resultArr)
    return nok
  }
  return 0
}

function findNok(arr: number[]) {
  const nod = (x: number, y: number): number => (!y ? x : nod(y, x % y));
  const nok = (x: number, y: number) => (x * y) / nod(x, y);
  return arr.reduce((a, b) => nok(a, b))
}