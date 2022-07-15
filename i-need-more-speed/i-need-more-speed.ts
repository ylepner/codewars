export function reverse(arr: any[]) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const swap = arr[i];
    arr[i++] = arr[j];
    arr[j--] = swap;
  }

  return arr;
}