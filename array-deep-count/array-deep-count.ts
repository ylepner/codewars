export function deepCount(arr: any[] | any[][]) {
  let count = 0;
  for (let el of arr) {
    count += 1
    if (Array.isArray(el)) {
      count += deepCount(el)
    }
  }
  return count
}