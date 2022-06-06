export function calculate(foo: any) {
  return function (a: any) {
    return function (b: any) {
      return foo(a, b)
    }
  }
}

function sum(a: number, b: number) {
  return a + b;
}

let curriedSum = calculate(sum);
