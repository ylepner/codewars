export function myLanguages(results: Record<string, number>) {
  const keyArray: string[] = []
  for (const key in results) {
    const value = results[key];
    if (value >= 60) {
      keyArray.push(key);
    }
  }
  keyArray.sort(function (a, b) {
    return results[b] - results[a]
  })
  return keyArray
}