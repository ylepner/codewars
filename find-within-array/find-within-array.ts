export function trueIfEven(v: number, i: number) { return v % 2 === 0; }
export function neverTrue(v: number, i: number) { return false; }
export function trueIfValueEqualsIndex(v: number, i: number) { return v === i; }
export function trueIfLengthEqualsIndex(v: string, i: number) { return v.length === i; }


export const findInArray = function (array: number[] | string[], iterator: (v: number | string, i: number) => boolean) {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      return i
    }
  }
  return -1
};