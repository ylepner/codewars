export function recycle(array: Array<{ type: string, material: string, secondMaterial?: string }>) {
  const paper: string[] = []
  const glass: string[] = []
  const organic: string[] = []
  const plastic: string[] = []
  for (let arr of array) {
    if (arr.material === 'paper' || arr.secondMaterial === 'paper') {
      paper.push(arr.type)
    }
    if (arr.material === 'glass' || arr.secondMaterial === 'glass') {
      glass.push(arr.type)
    }
    if (arr.material === 'organic' || arr.secondMaterial === 'organic') {
      organic.push(arr.type)
    }
    if (arr.material === 'plastic' || arr.secondMaterial === 'plastic') {
      plastic.push(arr.type)
    }
  }
  const result = [paper, glass, organic, plastic]
  return result
}