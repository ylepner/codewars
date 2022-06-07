export function createFunctions(n: number) {
  const callbacks: Array<() => number> = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}