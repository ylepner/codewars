export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const colorBefore = image[sr][sc]
  const limitRows = image.length
  const limitCol = image[0].length

  if (colorBefore === color) {
    return image
  }

  fill(sr, sc)

  function fill(sr: number, sc: number) {
    if (sr >= limitRows || sc >= limitCol || sr < 0 || sc < 0 || image[sr][sc] !== colorBefore) {
      return
    }

    image[sr][sc] = color
    fill(sr, sc - 1)
    fill(sr - 1, sc)
    fill(sr, sc + 1)
    fill(sr + 1, sc)
  }

  return image
}