export function validWord(dictionary: string[], word: string): boolean {
  if (word === '') {
    return true;
  }
  return dictionary.some(str => {
    if (word.startsWith(str)) {
      return validWord(dictionary, word.slice(str.length));
    }
    return false;
  });
}