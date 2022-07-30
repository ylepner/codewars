export function mirror(obj: Record<string, undefined>) {
  const result: Record<string, string> = {}
  const keys = Object.keys(obj)
  keys.forEach((key) => result[key] = key.split('').reverse().join(''))
  return result
};