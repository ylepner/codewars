export class WordDictionary {
  words: string[]
  constructor() {
    this.words = []
  }

  addWord(word: string) {
    this.words.push(word);
  }

  search(word: string) {
    const pattern = new RegExp(`^${word}$`);
    return this.words.some((word: string) => pattern.test(word));
  }
};