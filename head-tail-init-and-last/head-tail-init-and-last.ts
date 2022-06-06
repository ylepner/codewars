export function head(arr: number[]) {
  return arr[0]
}

export function tail(arr: number[]) {
  const res = arr.slice(1)
  return res;
}

export function init(arr: number[]) {
  return arr.slice(0, arr.length - 1)
}

export function last(arr: number[]) {
  return arr[arr.length - 1]
}