export function validWord(dictionary: string[], word: string): boolean {
  for (let str of dictionary) {
    if (word.includes(str)) {
      let restString = word.split(str).join('')
      if (restString === '') {
        return true
      }
      if (restString === word) {
        return false
      }
    }
  }
  return true
}

// export function validWord(dictionary: string[], word: string): boolean {
//   if (word === '') {
//     return true;
//   }
//   return dictionary.some(key => {
//     if (!word.startsWith(key)) return false;
//     return validWord(dictionary, word.slice(key.length));
//   });
// }