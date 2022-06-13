export function nicknameGenerator(name: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let result: string
  if (name.length < 4) {
    return "Error: Name too short"
  }
  let letter = name[2]
  if (vowels.includes(letter)) {
    result = name.slice(0, 4)
  } else {
    result = name.slice(0, 3)
  }
  return result
}